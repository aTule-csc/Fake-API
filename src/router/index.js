import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/Views/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog,
    },
  ],
})

export default router
