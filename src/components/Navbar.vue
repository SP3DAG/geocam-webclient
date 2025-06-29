<script>
export default {
  name: 'NavbarHeader'
}
</script>

<template>
  <header class="header">
    <div class="brand">
      <RouterLink to="/" @click="closeMenu">
        <img class="logo" src="@/assets/title_lightmode.png" alt="GeoCam logo" />
      </RouterLink>
    </div>
    <nav>
      <button 
        class="mobile-menu-button" 
        @click="toggleMenu" 
        aria-label="Toggle navigation menu"
        aria-expanded="menuOpen"
      >
        <i class="bi bi-list"></i>
      </button>
      <ul :class="{ 'mobile-hidden': !menuOpen }" @click="closeMenu">
        <li><RouterLink to="/product">Product</RouterLink></li>
        <li><RouterLink to="/validate">Validate</RouterLink></li>
        <li><RouterLink to="/shop"><i class="bi bi-basket3-fill"></i> Shop</RouterLink></li>
        <li><a href="https://backend-dzm1.onrender.com/api/public-keys"><i class="bi bi-key-fill"></i> SSH Keys</a></li>
        <li><a href="https://github.com/SP3DAG" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
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
  z-index: 1000;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.brand, nav {
  margin: 0 20px;
}

.brand a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--black);
}

.logo {
  height: 2.5rem;
  padding-right: 10px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

nav a {
  color: var(--tt-dark);
  text-decoration: none;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: color 0.2s ease;
  padding: 8px 0;
  display: flex;
  align-items: center;
}

nav a:hover {
  color: var(--primary-color);
}

nav a i {
  margin-right: 6px;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--black);
  padding: 5px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .header {
    padding: 8px 0;
  }

  .logo {
    height: 2rem;
  }

  nav ul {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: var(--white-soft);
    flex-direction: column;
    gap: 12px;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: none;
    z-index: 1001;
  }

  nav ul.mobile-hidden {
    display: none;
  }

  nav ul:not(.mobile-hidden) {
    display: flex;
  }

  .mobile-menu-button {
    display: block;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .brand, nav {
    margin: 0 12px;
  }
  
  nav ul {
    right: 12px;
    padding: 12px 16px;
  }
  
  nav a {
    font-size: 0.85rem;
  }
}
</style>