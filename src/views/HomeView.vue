<script setup>
</script>
<template>
  <canvas id="hero-lightpass"/>
  <div class="main" id="hello">
    <div class="section">
      <h1> GEOCAM </h1>
    </div>
    <div class="section">
      <h1> New Device </h1>
    </div>
    <div class="section">
      <h1> Better Data </h1>
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

    const frameCount = 797;
    const currentFrame = index => (
        require(`@/assets/frames/${index.toString().padStart(3, '0')}.png`)
    )

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    img.onload=function(){
      context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    }

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}
h1{
  font-size: 6rem;
  text-align: center;
  position: relative;
}
canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /*max-width: 100vw;*/
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: -2;
}
</style>
