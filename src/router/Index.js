import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Kontak from '../pages/Kontak.vue'
import DaftarHarga from '@/pages/DaftarHarga.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home' // 👈 title khusus untuk halaman ini
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Kontak,
    meta: {
      title: 'Contact' // 👈 title khusus untuk halaman ini
    }
  },
  {
    path: '/price-list',
    name: 'PriceList',
    component: DaftarHarga,
    meta: {
      title: 'Price List' // 👈 title khusus untuk halaman ini
    }
  },
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
