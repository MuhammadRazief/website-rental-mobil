// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: 'Home',
    about: 'About',
    daftarHarga: 'List Price',
    service: 'Service',
    contact: 'Contact'
  },
  id: {
    home: 'Beranda',
    about: 'Tentang',
    daftarHarga: 'Daftar Harga',
    service: 'Layanan',
    contact: 'Kontak'
  }
}

const i18n = createI18n({
    legacy: false,      // Pakai composition API
    locale: 'id',
    fallbackLocale: 'en',
    messages
  })

export default i18n
