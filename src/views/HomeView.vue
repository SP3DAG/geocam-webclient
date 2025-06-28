<script setup>
<<<<<<< HEAD
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

=======
</script>
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
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
<<<<<<< HEAD
      <div class="info-box">
=======
      <div class="left-info">
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
        <h2><i class="bi bi-lightbulb-fill"></i> A completely new Device</h2>
        <p>
          With its innovative design and leading-edge software, the GeoCam is new kind of device.
          It enables you to take photos with reliable information about the location and time the photo was taken.
        </p> 
      </div>
    </div>
    <div class="section" id="section-3">
<<<<<<< HEAD
      <div class="info-box">
=======
      <div class="left-info">
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
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
<<<<<<< HEAD
      </div>
    </div>
    <div class="section" id="section-4">
      <div class="info-box final">
=======
    
      </div>
    </div>
    <div class="section" id="section-4">
      <div class="final-info">
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
        <p>GeoCam - get it now</p>
      </div>
    </div>
  </div>
</template>

<<<<<<< HEAD
<style scoped>
.main {
=======
<script>
//import {gsap} from "gsap";
//import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
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

    const resizeCanvas = function(){
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
    }

    const img = new Image()
    img.src = currentFrame(1);
    resizeCanvas()
    img.onload=function(){
      context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2);
    }

    const changeVisibility = function(){
      const scrollTop = html.scrollTop;
      if(scrollTop > -100 && scrollTop <= 150){ 
        document.getElementById("section-1").classList.add("show");
      }else if(scrollTop > 150 && scrollTop <= 750){
        document.getElementById("section-1").classList.remove("show");
        document.getElementById("section-2").classList.remove("show");
      }else if(scrollTop > 750 && scrollTop <= 1500){
        document.getElementById("section-2").classList.add("show");
      }else if(scrollTop > 1500 && scrollTop <= 2750){
        document.getElementById("section-2").classList.remove("show");
        document.getElementById("section-3").classList.remove("show");
      }else if(scrollTop > 2750 && scrollTop <= 3500){
        document.getElementById("section-3").classList.add("show");
      }else if(scrollTop > 3500 && scrollTop <= 4500){
        document.getElementById("section-3").classList.remove("show");
        document.getElementById("section-4").classList.remove("show");
      }else if(scrollTop > 4500){
        document.getElementById("section-4").classList.add("show");
      }
    }

    window.addEventListener('resize', resizeCanvas)

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1))
      changeVisibility()
    });

    changeVisibility()
    preloadImages()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  /*background-image: url("@/assets/bg_v1.jpg");
  background-size: cover;*/
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
  height: 600vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
<<<<<<< HEAD
#section-1 {
  flex-direction: column;
  text-align: center;
}
.show {
  opacity: 1;
}

/* Common Info Box Styles */
.info-box {
=======
#section-1{
  flex-direction: column;
}
#section-1 > p{
  position: relative;
  top: -20%;
  font-size: 32pt;
  color: var(--white-soft);
}
.show{
  opacity: 1;
}
.title{
  height: 10rem;
  position: relative;
  top: -20%;
}
.left-info{
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
  color: var(--black);
  background-color: var(--white-transparent);
  padding: 20px;
  border-radius: 20px;
  position: relative;
<<<<<<< HEAD
  -webkit-box-shadow: 0 0 20px var(--white-transparent);
  box-shadow: 0 0 20px var(--white-transparent);
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

/* Mobile Styles */
@media (max-width: 768px) {
  .main {
    height: 500vh;
  }
  
  #section-1 > p {
    font-size: 18pt;
    margin-top: 15px;
  }
  
  .title {
    height: 8rem;
    max-width: 90%;
  }
  
  .info-box {
    max-width: 90%;
    left: 0;
    margin: 0 20px;
    padding: 15px;
  }
  
  .info-box > h2 {
    font-size: 22pt;
    margin-top: 0;
  }
  
  .info-box > p, 
  .info-box > ul > li {
    font-size: 16pt;
    line-height: 1.4;
  }
  
  .info-box.final {
    font-size: 32pt;
    padding: 15px;
    text-align: center;
    width: 90%;
  }
  
  .mouse-wrapper {
    margin-top: 30px;
    padding: 10px;
  }
  
  .mouse {
    width: 40px;
    height: 70px;
  }
}

/* Common Elements */
=======
  max-width: 700px;
  left: -30%;
  -webkit-box-shadow: 0 0 20px var(--white-transparent);
        box-shadow: 0 0 20px var(--white-transparent);
}
.left-info > h2{
  font-size: 36pt;
}
.left-info > p, .left-info > ul > li{
  font-size: 24pt;
}
.final-info{
  color: var(--black);
  font-size: 60pt;
  position: relative;
  top: 30%;
  background-color: var(--light-green-transparent);
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 0 0 20px var(--light-green-transparent);
        box-shadow: 0 0 20px var(--light-green-transparent);
}
h1{
  font-size: 6rem;
  text-align: center;
  position: relative;
}
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
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
<<<<<<< HEAD

.mouse {
  border: 3px solid var(--black);
  border-radius: 60px;
  position: relative;
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
</style>
=======
.mouse-wrapper{
  position: relative;
  top: 25%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: var(--white-transparent);
  -webkit-box-shadow: 0 0 20px 20px var(--white-transparent);
    box-shadow: 0 0 20px 20px var(--white-transparent);
  border-radius: 25px;
}
/* Animation for scroll info */
.mouse {
  grid-column: 2;
  grid-row: 3;
	width: 50px;
	height: 90px;
	border: 3px solid var(--black);
	border-radius: 60px;
	position: relative;
	&::before {
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
		-webkit-animation: wheel 2s infinite;
	}
}

@keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 60px;
	}
}
</style>
>>>>>>> 4b001846fc286cf73ff71ab0ad8c53728c46d4f0
