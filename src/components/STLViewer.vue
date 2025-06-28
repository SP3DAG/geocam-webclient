<template>
  <div class="stl-viewer-container">
    <div v-if="webglSupported" ref="viewerContainer" class="viewer-container"></div>
    <div v-else class="webgl-error">
      <div class="alert alert-warning">
        <h5>WebGL Not Supported</h5>
        <p>Your browser doesn't support WebGL, which is required for 3D visualization.</p>
        <p>Please try:</p>
        <ul>
          <li>Updating your browser to the latest version</li>
          <li>Enabling hardware acceleration in browser settings</li>
          <li>Using Chrome, Firefox, or Safari</li>
        </ul>
      </div>
    </div>
    <div v-if="webglSupported" class="controls">
      <button @click="resetCamera" class="btn btn-secondary btn-sm">Reset View</button>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { STLLoader } from 'three-stdlib'
import { OrbitControls } from 'three-stdlib'

export default {
  name: 'STLViewer',
  props: {
    stlPath: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      model: null,
      initialCameraPosition: { x: 0, y: 0, z: 0 },
      webglSupported: true
    }
  },
  mounted() {
    if (this.checkWebGLSupport()) {
      this.initViewer()
      this.loadSTL()
    }
  },
  beforeUnmount() {
    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  methods: {
    checkWebGLSupport() {
      try {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        if (!context) {
          this.webglSupported = false
          return false
        }
        return true
      } catch (e) {
        this.webglSupported = false
        return false
      }
    },

    initViewer() {
      try {
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0xf5f5f5)

        this.camera = new THREE.PerspectiveCamera(
          75,
          this.width / this.height,
          0.1,
          1000
        )

        this.renderer = new THREE.WebGLRenderer({ 
          antialias: true,
          alpha: true,
          powerPreference: "default"
        })
        this.renderer.setSize(this.width, this.height)
        this.renderer.setClearColor(0xf5f5f5, 1)

        this.$refs.viewerContainer.appendChild(this.renderer.domElement)

        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.05

        const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
        this.scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(1, 1, 1)
        this.scene.add(directionalLight)

        this.animate()
      } catch (error) {
        console.error('Error initializing 3D viewer:', error)
        this.webglSupported = false
      }
    },

    loadSTL() {
      const loader = new STLLoader()
      
      loader.load(
        this.stlPath,
        (geometry) => {
          const material = new THREE.MeshPhongMaterial({
            color: 0x0066cc,
            specular: 0x111111,
            shininess: 200
          })

          if (this.model) {
            this.scene.remove(this.model)
          }

          this.model = new THREE.Mesh(geometry, material)

          geometry.computeBoundingBox()
          const box = geometry.boundingBox
          const center = box.getCenter(new THREE.Vector3())
          const size = box.getSize(new THREE.Vector3())

          this.model.position.set(-center.x, -center.y, -center.z)

          const maxDim = Math.max(size.x, size.y, size.z)
          const fov = this.camera.fov * (Math.PI / 180)
          let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
          cameraZ *= 1.5

          this.camera.position.set(cameraZ, cameraZ, cameraZ)
          this.initialCameraPosition = { x: cameraZ, y: cameraZ, z: cameraZ }
          this.camera.lookAt(0, 0, 0)

          this.controls.target.set(0, 0, 0)
          this.controls.update()

          this.scene.add(this.model)
        },
        (progress) => {
          console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%')
        },
        (error) => {
          console.error('Error loading STL:', error)
        }
      )
    },

    resetCamera() {
      if (this.camera && this.controls) {
        this.camera.position.set(
          this.initialCameraPosition.x,
          this.initialCameraPosition.y,
          this.initialCameraPosition.z
        )
        this.controls.target.set(0, 0, 0)
        this.controls.update()
      }
    },

    animate() {
      requestAnimationFrame(this.animate)
      
      if (this.controls) {
        this.controls.update()
      }
      
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    }
  }
}
</script>

<style scoped>
.stl-viewer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.viewer-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.webgl-error {
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.alert {
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  max-width: 500px;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeaa7;
}
</style>