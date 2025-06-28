<template>
  <div class="simple-stl-viewer">
    <div v-if="webglSupported" ref="container" class="viewer-canvas"></div>
    <div v-else class="webgl-fallback">
      <div class="alert alert-info">
        <h5>3D-Vorschau nicht verfügbar</h5>
        <p>WebGL wird nicht unterstützt. Bitte aktualisieren Sie Ihren Browser.</p>
      </div>
    </div>
    <div v-if="webglSupported" class="viewer-controls">
      <button @click="resetView" class="btn btn-sm btn-outline-primary">Ansicht zurücksetzen</button>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { STLLoader } from 'three-stdlib'
import { OrbitControls } from 'three-stdlib'

export default {
  name: 'SimpleSTLViewer',
  props: {
    modelPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      webglSupported: true,
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      mesh: null,
      animationId: null
    }
  },
  mounted() {
    this.checkWebGL()
    if (this.webglSupported) {
      this.init()
      this.loadModel()
    }
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    checkWebGL() {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        this.webglSupported = !!gl
      } catch (e) {
        this.webglSupported = false
      }
    },

    init() {
      const width = 600
      const height = 400

      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(0xf0f0f0)

      this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
      this.camera.position.set(0, 0, 100)

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(width, height)
      this.$refs.container.appendChild(this.renderer.domElement)

      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      this.controls.enableDamping = true

      const light1 = new THREE.HemisphereLight(0xffffff, 0x444444)
      light1.position.set(0, 200, 0)
      this.scene.add(light1)

      const light2 = new THREE.DirectionalLight(0xffffff)
      light2.position.set(0, 200, 100)
      this.scene.add(light2)

      this.animate()
    },

    loadModel() {
      const loader = new STLLoader()
      loader.load(
        this.modelPath,
        (geometry) => {
          if (this.mesh) {
            this.scene.remove(this.mesh)
          }

          const material = new THREE.MeshLambertMaterial({ color: 0x0077be })
          this.mesh = new THREE.Mesh(geometry, material)

          geometry.computeBoundingBox()
          const box = geometry.boundingBox
          const center = new THREE.Vector3()
          box.getCenter(center)
          
          this.mesh.position.sub(center)
          
          const size = new THREE.Vector3()
          box.getSize(size)
          const maxDim = Math.max(size.x, size.y, size.z)
          const scale = 50 / maxDim
          this.mesh.scale.setScalar(scale)

          this.scene.add(this.mesh)
          this.resetView()
        },
        undefined,
        (error) => {
          console.error('Fehler beim Laden der STL-Datei:', error)
        }
      )
    },

    resetView() {
      if (this.camera && this.controls) {
        this.camera.position.set(50, 50, 50)
        this.camera.lookAt(0, 0, 0)
        this.controls.target.set(0, 0, 0)
        this.controls.update()
      }
    },

    animate() {
      this.animationId = requestAnimationFrame(this.animate)
      if (this.controls) this.controls.update()
      if (this.renderer) this.renderer.render(this.scene, this.camera)
    },

    cleanup() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
      if (this.renderer) {
        this.renderer.dispose()
      }
    }
  }
}
</script>

<style scoped>
.simple-stl-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.viewer-canvas {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.webgl-fallback {
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f8f9fa;
}

.alert {
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.alert-info {
  background-color: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
}

.viewer-controls {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #007bff;
  background: transparent;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #007bff;
  color: white;
}
</style>