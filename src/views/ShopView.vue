<template>
  <div class="shop-container">
    <div class="container py-4">
      <h1 class="text-center mb-4">3D Product Preview</h1>
      
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title mb-0">iPhone 16e Camera Case</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <!-- Linke Spalte: Bild -->
                <div class="col-lg-6">
                  <div class="image-section">
                    <div class="model-preview">
                      <img src="/grip.jpg" alt="iPhone 16e Camera Case Preview" class="model-image">
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
                </div>
                
                <!-- Rechte Spalte: Informationen -->
                <div class="col-lg-6">
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                              <path d="M9 19C4 20.5 4 16.5 2 16M22 16L20 20L18 16"/>
                              <path d="M16 22V18.13A3.25 3.25 0 0 0 15.17 15.17A6.39 6.39 0 0 1 15.17 9.83A3.25 3.25 0 0 0 16 6.87V3"/>
                            </svg>
                            3D-Printing Repository
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      stlFilePath: '/models/iPhone 16e Camera Case Final Release.stl',
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
.shop-container {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
}

.card-header {
  background-color: #007bff;
  color: white;
  border-bottom: none;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 20px;
}

.model-preview {
  position: relative;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 450px;
}

.model-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.info-section {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
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
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.8) 0%, rgba(0, 123, 255, 0.6) 100%);
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
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.model-badge {
  background: rgba(255, 255, 255, 0.9);
  color: #007bff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
}

.model-info {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  border-left: 4px solid #007bff;
}

.info-item {
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
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
  background: #e8f4fd;
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid #17a2b8;
}

.tips-title {
  color: #17a2b8;
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
  color: #17a2b8;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.btn {
  padding: 12px 24px;
  border-radius: 6px;
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
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
  background: transparent;
}

.btn-outline-info:hover {
  background-color: #17a2b8;
  color: white;
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