<script>
export default {
  name: 'NavbarHeader'
}
</script>

<template>
  <header class="header">
    <div class="brand">

      <RouterLink to="/"><img class="logo" src="../assets/logo_v1.png" alt="logo" />Geocam</RouterLink>
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/product">Product</RouterLink></li>
        <li><RouterLink to="/validate">Validate</RouterLink></li>
        <li><RouterLink to="/shop"><i class="bi bi-basket3-fill"></i> Shop</RouterLink></li>
        <li><a href="https://github.com/SP3DAG" target="_blank"><i class="bi bi-github"></i> GitHub</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header{
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--white-soft);
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--black);
  z-index: 10;
}
.brand, nav{
  margin: 20px;
}
.brand a{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--black);
}

.logo{
  height: 3rem;
  padding-right: 20px;
}

.header nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-right: 20px;
}

.header nav a {
  color: var(--tt-dark);
  text-decoration: none;
  font-size: 1rem;
}
.disabled-a {
  color: gray !important;
  cursor: default;
  pointer-events: none;
}
</style>