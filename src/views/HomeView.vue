<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  const html = document.documentElement;
  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");

  const frameCount = 201;
  const currentFrame = index => (
    require(`@/assets/frames/${index.toString().padStart(3, '0')}.png`)
  )

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const resizeCanvas = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  const img = new Image()
  img.src = currentFrame(1);
  resizeCanvas()
  img.onload = function() {
    context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
  }

  const getScrollThresholds = () => {
    const isMobile = window.innerWidth <= 768;
    return {
      section1: isMobile ? window.innerHeight * 0.5 : 150,
      section2: isMobile ? window.innerHeight * 1.5 : 750,
      section3: isMobile ? window.innerHeight * 2.5 : 1500,
      section4: isMobile ? window.innerHeight * 3.5 : 2750,
      section5: isMobile ? window.innerHeight * 4.5 : 3500,
      section6: isMobile ? window.innerHeight * 5.5 : 4500
    };
  }

  const changeVisibility = function() {
    const scrollTop = html.scrollTop;
    const thresholds = getScrollThresholds();
    
    if(scrollTop > -100 && scrollTop <= thresholds.section1){ 
      document.getElementById("section-1").classList.add("show");
    } else if(scrollTop > thresholds.section1 && scrollTop <= thresholds.section2){
      document.getElementById("section-1").classList.remove("show");
      document.getElementById("section-2").classList.remove("show");
    } else if(scrollTop > thresholds.section2 && scrollTop <= thresholds.section3){
      document.getElementById("section-2").classList.add("show");
    } else if(scrollTop > thresholds.section3 && scrollTop <= thresholds.section4){
      document.getElementById("section-2").classList.remove("show");
      document.getElementById("section-3").classList.remove("show");
    } else if(scrollTop > thresholds.section4 && scrollTop <= thresholds.section5){
      document.getElementById("section-3").classList.add("show");
    } else if(scrollTop > thresholds.section5 && scrollTop <= thresholds.section6){
      document.getElementById("section-3").classList.remove("show");
      document.getElementById("section-4").classList.remove("show");
    } else if(scrollTop > thresholds.section6){
      document.getElementById("section-4").classList.add("show");
    }
  }

  const handleResize = () => {
    resizeCanvas();
    changeVisibility();
  };

  const handleScroll = () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
    changeVisibility()
  };

  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll);

  changeVisibility();
  preloadImages();

  // Cleanup function
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <canvas id="hero-lightpass"/>
  <div class="main" id="hello">
    <div class="section" id="section-1">
      <img class="title" src="@/assets/title_darkmode.png"/><br/>
      <p>An ifgi study project</p>
      <div class="mouse-wrapper">
        <div class="mouse"></div>
      </div>
    </div>
    <div class="section" id="section-2">
      <div class="info-box">
        <h2><i class="bi bi-lightbulb-fill"></i> A completely new Device</h2>
        <p>
          With its innovative design and leading-edge software, the GeoCam is new kind of device.
          It enables you to take photos with reliable information about the location and time the photo was taken.
        </p> 
      </div>
    </div>
    <div class="section" id="section-3">
      <div class="info-box">
        <h2><i class="bi bi-recycle"></i> Sustainability in mind</h2>
        <p>
          The GeoCam is:
        </p>
        <ul>
            <li>Highly modular</li>
            <li>Reproducible</li>
            <li>Repairable</li>
            <li>Recyclable</li>
        </ul>
      </div>
    </div>
    <div class="section" id="section-4">
      <div class="info-box final">
        <p>GeoCam - get it now</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 600vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
}
.section {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s;
}
#section-1 {
  flex-direction: column;
  text-align: center;
}
.show {
  opacity: 1;
}

/* Common Info Box Styles */
.info-box {
  color: var(--black);
  background-color: var(--white-transparent);
  padding: 20px;
  border-radius: 20px;
  position: relative;
  -webkit-box-shadow: 0 0 20px var(--white-transparent);
  box-shadow: 0 0 20px var(--white-transparent);
  box-sizing: border-box;
}

/* Desktop Styles */
@media (min-width: 769px) {
  .main {
    height: 600vh;
  }
  
  #section-1 > p {
    font-size: 32pt;
    margin-top: 20px;
  }
  
  .title {
    height: 10rem;
    max-width: 80%;
  }
  
  .info-box {
    max-width: 700px;
    left: -26%;
  }
  
  .info-box > h2 {
    font-size: 36pt;
  }
  
  .info-box > p, 
  .info-box > ul > li {
    font-size: 24pt;
  }
  
  .info-box.final {
    font-size: 60pt;
    padding: 30px;
  }
  
  .mouse-wrapper {
    margin-top: 40px;
  }
}

/* Mobile Styles  */
@media (max-width: 768px) {
  .main {
    height: 500vh;
  }
  
  #section-1 > p {
    font-size: 18pt;
    margin-top: 15px;
    padding: 0 20px;
  }
  
  .title {
    height: 8rem;
    max-width: 90%;
    padding: 0 20px;
  }
  
  .info-box {
    max-width: 90%;
    left: 0 !important;
    margin: 0 auto;
    padding: 15px;
    width: calc(100% - 40px);
  }
  
  .info-box > h2 {
    font-size: 22pt;
    margin-top: 0;
    word-break: break-word;
  }
  
  .info-box > p, 
  .info-box > ul > li {
    font-size: 16pt;
    line-height: 1.4;
    word-break: break-word;
  }
  
  .info-box.final {
    font-size: 32pt;
    padding: 15px;
    text-align: center;
    width: calc(100% - 40px);
    left: 0 !important;
    margin: 0 auto;
  }
  
  .mouse-wrapper {
    margin: 30px auto 0;
    padding: 10px;
    max-width: 90%;
  }
  
  .mouse {
    width: 40px;
    height: 70px;
  }
}

/* Common Elements */
canvas {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: -2;
}

.mouse {
  border: 3px solid var(--black);
  border-radius: 60px;
  position: relative;
  width: 40px;
  height: 70px;
}

.mouse::before {
  content: '';
  width: 12px;
  height: 12px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--black);
  border-radius: 50%;
  opacity: 1;
  animation: wheel 2s infinite;
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

.mouse-wrapper {
  background-color: var(--white-transparent);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Prevent horizontal overflow */
body, html {
  overflow-x: hidden;
  width: 100%;
}
</style>