<script setup>
  import 'vue3-carousel/carousel.css'
  import { ref, computed } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'

  const carouselRef = ref()
  const currentSlide = ref(1)

  const next = () => carouselRef.value.next()
  const prev = () => carouselRef.value.prev()

  const images = [
    {id: 0, img: require("@/assets/features/carousel_1.png"), text: ""},
    {id: 1, img: require("@/assets/features/carousel_2.png"), text: ""},
    {id: 2, img: require("@/assets/features/carousel_3.png"), text: ""},
    {id: 3, img: require("@/assets/features/carousel_4.png"), text: ""}
  ]

  const isMobile = computed(() => window.innerWidth <= 768)

  const config = computed(() => ({
    itemsToShow: isMobile.value ? 1 : 2,
    snapAlign: 'center',
    wrapAround: true,
    transition: 500,
    breakpoints: {
      768: {
        itemsToShow: 1,
        snapAlign: 'center'
      }
    }
  }))
</script>

<template>
  <section class="large" id="feature-section-1">
    <b id="test">
      ifgi Geocam
    </b>
    <div class="mouse"></div>
  </section>
  
  <section class="large" id="feature-section-2">
    <b id="carousel-headline">
      See the features
    </b>
    
    <Carousel 
      ref="carouselRef" 
      v-model="currentSlide" 
      v-bind="config" 
      id="feature-carousel"
    >
      <Slide v-for="image in images" :key="image.id">
        <div class="slide-container">
          <img :src="image.img" :alt="'Feature ' + image.id" class="carousel-img" />
          <p class="slide-text" v-if="image.text">{{ image.text }}</p>
        </div>
      </Slide>
    </Carousel>

    <div id="carousel-nav">
      <button class="carousel-btn" aria-label="carousel-prev" @click="prev">
        <i class="bi bi-arrow-left-circle"></i>
      </button>
      <button class="carousel-btn" aria-label="carousel-next" @click="next">
        <i class="bi bi-arrow-right-circle"></i>
      </button>
    </div>
  </section>
</template>

<style scoped>
  section {
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }

  #feature-section-1 {
    background-image: url("@/assets/bg_v1.jpg");
    background-size: cover;
    background-position: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .small {
    height: 70vh;
  }

  .large {
    height: 100vh;
    min-height: 600px;
  }

  #test {
    grid-column: 1/4;
    grid-row: 2;
    font-size: clamp(40pt, 8vw, 100pt);
    text-align: center;
    padding: 0 20px;
  }

  /* Animation for scroll info */
  .mouse {
    grid-column: 2;
    grid-row: 3;
    width: 50px;
    height: 90px;
    border: 3px solid #333;
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
    background-color: #333;
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

  /* Carousel section Style */
  #feature-section-2 {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    background: linear-gradient(320deg, var(--black-grad) 0%, var(--blue-grad) 100%);
    padding: 20px 0;
  }

  .slide-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .carousel-img {
    border-radius: 15px;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 60vh;
    object-fit: contain;
    margin: 0 auto;
  }

  #carousel-headline {
    grid-column: 1;
    grid-row: 1;
    font-size: clamp(20pt, 5vw, 30pt);
    margin: 1.5rem 0;
    color: var(--white-soft);
    text-align: center;
    width: 100%;
  }

  #carousel-nav {
    grid-column: 1;
    grid-row: 3;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }

  #feature-carousel {
    grid-column: 1;
    grid-row: 2;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  .slide-text {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(16pt, 4vw, 24pt);
    color: var(--white-soft);
    text-align: center;
    width: 90%;
    max-width: 500px;
    background-color: rgba(0,0,0,0.5);
    padding: 10px;
    border-radius: 10px;
  }

  .carousel-btn {
    background: transparent;
    border: none;
    font-size: clamp(20pt, 5vw, 30pt);
    margin: 0 1rem;
    color: var(--light-green);
    cursor: pointer;
  }

  @media (min-width: 769px) {
    #feature-section-2 {
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: auto 1fr auto;
    }

    #carousel-headline {
      grid-column: 1/4;
    }

    #feature-carousel {
      grid-column: 2;
    }

    #carousel-nav {
      grid-column: 1/4;
    }

    .carousel-img {
      max-height: 65vh;
    }
  }
</style>