<script setup>
import { useRoute } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
//import { ref, watch } from 'vue'

const route = useRoute()
console.log(route)

//const username = ref(route.params.id)
</script>
<template>
  <div id="app">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global styles here */

</style>