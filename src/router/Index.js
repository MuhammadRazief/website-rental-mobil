import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home' // 👈 title khusus untuk halaman ini
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const defaultTitle = 'Rental Mobil Jakarta' // fallback kalau route nggak ada title
  document.title = to.meta.title || defaultTitle
  next()
})

export default router
