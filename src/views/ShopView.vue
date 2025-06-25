<template>
  <div class="shop-container">

    <div class="image-section">
      <div class="model-preview">
        <img src="@/assets/preview.png" alt="iPhone 16e Camera Case Preview" class="model-image">
        <div class="model-overlay">
          <div class="model-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="model-svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
              <path d="M12 22V12"/>
              <path d="M22 7L12 12L2 7"/>
              <path d="M17 5L7 10"/>
            </svg>
          </div>
          <span class="model-badge">3D STL</span>
        </div>
      </div>
    </div>

    <div class="info-section">
      <h4 class="product-title">iPhone 16e Camera Case</h4>
      <p class="product-subtitle text-muted">3D STL-Model for 3D-Printing </p>

      <div class="model-info">
        <div class="info-item">
          <strong>File:</strong> iPhone 16e Camera Case Final Release.stl
        </div>
        <div class="info-item">
          <strong>Format:</strong> .STL file
        </div>
        <div class="info-item">
          <strong>Product:</strong> iPhone 16e CameraGrip
        </div>
        <div class="info-item">
          <strong>Material:</strong> PLA
        </div>
        <div class="info-item">
          <strong>Duration:</strong> 2h 30 min
        </div>
      </div>

      <div class="action-buttons mt-4">
        <div class="row g-2">
          <div class="col-6">
            <button class="btn btn-primary btn-lg w-100" @click="downloadSTL">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                <path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              download .STL file
            </button>
          </div>
          <div class="col-6">
            <button class="btn btn-outline-info btn-lg w-100" @click="openGitHub">
              <i class="bi bi-github"></i>
              3D-Printing Repository
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopView',
  data() {
    return {
      stlFilePath: 'img/models/iPhone 16e Camera Case Final Release.stl',
      showInfo: false
    }
  },
  methods: {
    downloadSTL() {
      const link = document.createElement('a')
      link.href = this.stlFilePath
      link.download = 'iPhone 16e Camera Case Final Release.stl'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    openGitHub() {
      window.open('https://github.com/SP3DAG/3D-Printing', '_blank')
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.shop-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: end;
}
.image-section {
  display: flex;
  grid-column: 1 / 2;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  height: calc(93vh - 20px);
  padding: 20px;
}

.model-preview {
  position: relative;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 100%;
}

.model-image {
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.info-section {
  display: flex;
  grid-column: 2 / 3;
  min-height: 400px;
  height: calc(93vh - 20px);
  padding: 20px;
  flex-direction: column;
}

.product-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
}

.product-subtitle {
font-size: 1.1rem;
margin-bottom: 30px;
}

.model-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(63, 125, 32, 0.8) 0%, rgba(63, 125, 32, 0.6) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.model-preview:hover .model-overlay {
opacity: 1;
}

.model-icon {
display: flex;
justify-content: center;
margin-bottom: 10px;
}

.model-svg {
color: var(--white-soft);
filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.model-badge {
background: var(--white-soft);
color: var(--green);
padding: 6px 12px;
border-radius: 20px;
font-size: 14px;
font-weight: 600;
}

.model-info {
background: var(--white-soft);
border-radius: 8px;
padding: 20px;
margin: 20px 0;
border-left: 4px solid var(--green);
}

.info-item {
padding: 12px 0;
border-bottom: 1px solid var(--light-grey);
font-size: 1rem;
}

.info-item:last-child {
border-bottom: none;
}

.action-buttons {
display: flex;
flex-wrap: wrap;
gap: 15px;
}

.print-tips {
background: var(--white-soft);
border-radius: 8px;
padding: 20px;
border-left: 4px solid var(--light-green);
}

.tips-title {
color: var(--light-green);
font-weight: 600;
margin-bottom: 15px;
display: flex;
align-items: center;
}

.tips-list {
list-style: none;
padding: 0;
margin: 0;
}

.tips-list li {
padding: 6px 0;
position: relative;
padding-left: 20px;
}

.tips-list li:before {
content: "•";
color: var(--light-green);
font-weight: bold;
position: absolute;
left: 0;
}

.btn {
padding: 12px 24px;
border-radius: 6px;
  height: 5rem;
font-weight: 500;
display: inline-flex;
align-items: center;
text-decoration: none;
border: 1px solid transparent;
cursor: pointer;
transition: all 0.3s ease;
}

.btn-lg {
padding: 15px 30px;
font-size: 1.1rem;
}

.btn-primary {
background-color: var(--green);
color: var(--white-soft);
border-color: var(--green);
}

.btn-primary:hover {
background-color: #306419;
border-color: #306419;
}

.btn-outline-info {
color: var(--light-green);
border-color: var(--light-green);
background: transparent;
}

.btn-outline-info:hover {
background-color: var(--light-green);
color: var(--white-soft);
}

.me-2 {
margin-right: 0.5rem;
}

.me-1 {
margin-right: 0.25rem;
}

.alert {
padding: 15px;
border-radius: 6px;
border: 1px solid transparent;
}

.alert-info {
color: #0c5460;
background-color: #d1ecf1;
border-color: #bee5eb;
}

.text-start {
text-align: left;
}

.additional-info {
animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
from { opacity: 0; transform: translateY(-10px); }
to { opacity: 1; transform: translateY(0); }
}
</style>