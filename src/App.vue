<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

import Navbar from "@/components/Navbar.vue";

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