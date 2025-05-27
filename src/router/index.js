import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('@/views/ValidateView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/ShopView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router