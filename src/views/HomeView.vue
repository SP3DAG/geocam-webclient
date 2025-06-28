<script setup>
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
      <div class="left-info">
        <h2><i class="bi bi-lightbulb-fill"></i> A completely new Device</h2>
        <p>
          With its innovative design and leading-edge software, the GeoCam is new kind of device.
          It enables you to take photos with reliable information about the location and time the photo was taken.
        </p> 
      </div>
    </div>
    <div class="section" id="section-3">
      <div class="left-info">
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
      <div class="final-info">
        <p>GeoCam - get it now</p>
      </div>
    </div>
  </div>
</template>

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
  color: var(--black);
  background-color: var(--white-transparent);
  padding: 20px;
  border-radius: 20px;
  position: relative;
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
