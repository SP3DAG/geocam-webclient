<script>
export default {
  name: 'NavbarHeader'
}
</script>

<template>
  <header class="header">
    <div class="brand">
      <RouterLink to="/"><img class="logo" src="@/assets/title_lightmode.png" alt="logo" /></RouterLink>
    </div>
    <nav>
      <!-- Added mobile menu button -->
      <button class="mobile-menu-button" @click="toggleMenu">
        <i class="bi bi-list"></i>
      </button>
      <ul :class="{ 'mobile-hidden': !menuOpen }">
        <li><RouterLink to="/product">Product</RouterLink></li>
        <li><RouterLink to="/validate">Validate</RouterLink></li>
        <li><RouterLink to="/shop"><i class="bi bi-basket3-fill"></i> Shop</RouterLink></li>
        <li><a href="https://backend-dzm1.onrender.com/api/public-keys"><i class="bi bi-key-fill"></i> SSH Keys</a></li>
        <li><a href="https://github.com/SP3DAG" target="_blank"><i class="bi bi-github"></i> GitHub</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.header {
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
  z-index: 1000; /* Increased z-index */
  padding: 10px 0; /* Reduced padding */
}

.brand, nav {
  margin: 0 20px; /* Reduced margin */
}

.brand a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--black);
}

.logo {
  height: 2.5rem; /* Reduced size */
  padding-right: 10px; /* Reduced padding */
}

.header nav ul {
  list-style: none;
  display: flex;
  gap: 15px; /* Reduced gap */
  margin-right: 10px; /* Reduced margin */
}

.header nav a {
  color: var(--tt-dark);
  text-decoration: none;
  font-size: 0.9rem; /* Reduced font size */
  white-space: nowrap;
}

.disabled-a {
  color: gray !important;
  cursor: default;
  pointer-events: none;
}

/* Mobile menu button - hidden by default */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--black);
}

/* Mobile styles */
@media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
    padding: 5px 0;
  }

  .logo {
    height: 2rem;
  }

  .header nav ul {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: var(--white-soft);
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: none;
  }

  .header nav ul.mobile-hidden {
    display: none;
  }

  .header nav ul:not(.mobile-hidden) {
    display: flex;
  }

  .mobile-menu-button {
    display: block;
  }

  /* Show the mobile menu when toggled */
  .mobile-menu-visible {
    display: flex !important;
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .brand {
    margin: 0 10px;
  }
  
  .header nav a {
    font-size: 0.8rem;
  }
  
  .header nav ul {
    right: 10px;
    padding: 10px;
  }
}
</style>