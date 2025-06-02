<script setup>
  import 'vue3-carousel/carousel.css'
  import { ref } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'

  const carouselRef = ref()
  const currentSlide = ref(1)

  const next = () => carouselRef.value.next()
  const prev = () => carouselRef.value.prev()

  const images = [{id: 0, img: require("@/assets/features/grip.jpg"), text:"Ergonomic grip designed for your needs"},
                  {id: 1,img: require("@/assets/features/screw.jpg"), text:"Support for 1/4  inch accessories"},
                  {id: 2,img: require("@/assets/features/shutter.jpg"), text:"Removable shutter button for maximal versatility"}]

  const config = {
    height: 200,
    itemsToShow: 2,
    gap: 5,
  }
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
    <Carousel ref="carouselRef" v-model="currentSlide" v-bind="config" id="feature-carousel" gap=35 wrapAround="true" >
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.img" alt="image" class="carousel-img " />
        <p class="slide-text">{{ image.text }}</p>
      </Slide>
    </Carousel>

    <div id="carousel-nav">
      <button class="carousel-btn" @click="prev"><i class="bi bi-arrow-left-circle"></i></button>
      <button class="carousel-btn" @click="next"><i class="bi bi-arrow-right-circle"></i></button>
    </div>
  </section>
  <section class="small">
    <h2>
      Featurue 3
    </h2>
  </section>
  <section class="small">
    <h2>
      Featurue 4
    </h2>
  </section>
</template>

<style scoped>
  *{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  section{
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
  #feature-section-1{
    background-image: url("@/assets/bg_v1.jpg");
    background-size: cover;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
 
  .small{
    height: 70vh;
  }
  .large{
    height: 90vh;
  }
  #test{
    grid-column: 1/4;
    grid-row: 2;
    font-size: 100pt;
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
	&::before {
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

/* Carousel section Style */
#feature-section-2{
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    background: linear-gradient(320deg,var(--black) 0%, var(--grey) 33%, var(--green) 67%, var(--light-green) 100%);
}
.carousel-img {
  border-radius: 15px;
  width: 100%;
  height: 100%;
  max-height: 65vh;
  object-fit: cover;
  margin: 0;
}
#carousel-headline{
  grid-column: 1;
  grid-row: 1;
  font-size: 30pt;
  margin-top: 1.5rem;
  color: var(--black);
}
#carousel-nav{
  grid-column: 3;
  grid-row: 3;
}
#feature-carousel{
    grid-column: 1/4;
    grid-row: 2;
    height: 100%;
}
.slide-text{
  z-index: 2;
  position: fixed;
  left: 15%;
  font-size: 45pt;
  max-width: 30%;
  color: var(--white-soft);
}
.carousel-btn{
  background: transparent;
  border: none;
  font-size: 30pt;
  margin: 1rem;
  color: var(--light-green);
}
</style>