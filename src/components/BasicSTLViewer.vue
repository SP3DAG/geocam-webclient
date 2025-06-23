<template>
  <div class="basic-stl-viewer">
    <div v-if="!error" ref="viewerContainer" class="viewer-wrapper">
      <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
    <div v-else class="error-display">
      <div class="alert alert-warning">
        <h5>3D-Viewer Fehler</h5>
        <p>{{ error }}</p>
        <p>Versuchen Sie einen anderen Browser oder aktivieren Sie WebGL.</p>
      </div>
    </div>
    <div v-if="!error" class="controls">
      <button @click="resetCamera" class="btn btn-primary">Ansicht zurücksetzen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicSTLViewer',
  props: {
    modelPath: String,
    width: { type: Number, default: 600 },
    height: { type: Number, default: 400 }
  },
  data() {
    return {
      error: null,
      scene: null,
      camera: null,
      renderer: null,
      model: null,
      mouseDown: false,
      mouseX: 0,
      mouseY: 0,
      rotationX: 0,
      rotationY: 0,
      zoom: 1
    }
  },
  async mounted() {
    try {
      await this.initThreeJS()
      await this.loadSTL()
      this.setupEventListeners()
      this.animate()
    } catch (err) {
      this.error = `Initialisierungsfehler: ${err.message}`
      console.error('STL Viewer Error:', err)
    }
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    async initThreeJS() {
      try {
        const THREE = await import('three')
        
        // Scene
        this.scene = new THREE.Scene()
        this.scene.background = new THREE.Color(0xf5f5f5)

        // Camera
        this.camera = new THREE.PerspectiveCamera(
          45, 
          this.width / this.height, 
          0.1, 
          1000
        )
        this.camera.position.z = 50

        // Renderer mit Canvas
        this.renderer = new THREE.WebGLRenderer({ 
          canvas: this.$refs.canvas,
          antialias: true,
          alpha: false
        })
        this.renderer.setSize(this.width, this.height)
        this.renderer.setClearColor(0xf5f5f5)

        // Licht
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
        this.scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
        directionalLight.position.set(1, 1, 1)
        this.scene.add(directionalLight)

        console.log('Three.js erfolgreich initialisiert')
      } catch (err) {
        throw new Error(`Three.js Initialisierung fehlgeschlagen: ${err.message}`)
      }
    },

    async loadSTL() {
      try {
        const THREE = await import('three')
        const { STLLoader } = await import('three-stdlib')
        
        const loader = new STLLoader()
        
        return new Promise((resolve, reject) => {
          loader.load(
            this.modelPath,
            (geometry) => {
              try {
                // Material
                const material = new THREE.MeshLambertMaterial({ 
                  color: 0x0077be,
                  side: THREE.DoubleSide
                })

                // Mesh
                this.model = new THREE.Mesh(geometry, material)

                // Geometrie zentrieren
                geometry.computeBoundingBox()
                const box = geometry.boundingBox
                const center = new THREE.Vector3()
                box.getCenter(center)
                this.model.position.sub(center)

                // Skalierung
                const size = new THREE.Vector3()
                box.getSize(size)
                const maxDim = Math.max(size.x, size.y, size.z)
                const scale = 20 / maxDim
                this.model.scale.setScalar(scale)

                this.scene.add(this.model)
                console.log('STL-Modell erfolgreich geladen')
                resolve()
              } catch (err) {
                reject(new Error(`Mesh-Erstellung fehlgeschlagen: ${err.message}`))
              }
            },
            (progress) => {
              console.log('Ladefortschritt:', Math.round(progress.loaded / progress.total * 100) + '%')
            },
            (error) => {
              reject(new Error(`STL-Laden fehlgeschlagen: ${error.message || 'Unbekannter Fehler'}`))
            }
          )
        })
      } catch (err) {
        throw new Error(`STL-Loader Fehler: ${err.message}`)
      }
    },

    setupEventListeners() {
      const canvas = this.$refs.canvas
      if (!canvas) return

      canvas.addEventListener('mousedown', this.onMouseDown)
      canvas.addEventListener('mousemove', this.onMouseMove)
      canvas.addEventListener('mouseup', this.onMouseUp)
      canvas.addEventListener('wheel', this.onWheel)
    },

    onMouseDown(event) {
      this.mouseDown = true
      this.mouseX = event.clientX
      this.mouseY = event.clientY
    },

    onMouseMove(event) {
      if (!this.mouseDown || !this.model) return

      const deltaX = event.clientX - this.mouseX
      const deltaY = event.clientY - this.mouseY

      this.rotationY += deltaX * 0.01
      this.rotationX += deltaY * 0.01

      this.model.rotation.x = this.rotationX
      this.model.rotation.y = this.rotationY

      this.mouseX = event.clientX
      this.mouseY = event.clientY
    },

    onMouseUp() {
      this.mouseDown = false
    },

    onWheel(event) {
      event.preventDefault()
      if (!this.camera) return

      this.zoom += event.deltaY * -0.001
      this.zoom = Math.max(0.1, Math.min(3, this.zoom))
      
      this.camera.position.z = 50 / this.zoom
    },

    resetCamera() {
      if (this.camera && this.model) {
        this.camera.position.set(0, 0, 50)
        this.rotationX = 0
        this.rotationY = 0
        this.zoom = 1
        this.model.rotation.set(0, 0, 0)
      }
    },

    animate() {
      if (this.error) return
      
      requestAnimationFrame(this.animate)
      
      if (this.renderer && this.scene && this.camera) {
        try {
          this.renderer.render(this.scene, this.camera)
        } catch (err) {
          console.error('Render-Fehler:', err)
          this.error = 'Render-Fehler aufgetreten'
        }
      }
    },

    cleanup() {
      if (this.renderer) {
        this.renderer.dispose()
      }
    }
  }
}
</script>

<style scoped>
.basic-stl-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.viewer-wrapper {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: #f5f5f5;
}

canvas {
  display: block;
  cursor: grab;
}

canvas:active {
  cursor: grabbing;
}

.error-display {
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
  max-width: 400px;
}

.alert-warning {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.controls {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #0056b3;
}
</style>