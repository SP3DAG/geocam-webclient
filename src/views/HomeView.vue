<template>
  <div class="hello">
    <h1> GEOCAM </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-image: url("@/assets/bg_v1.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  font-size: 6rem;
  text-align: center;
  position: relative;
}
</style>
