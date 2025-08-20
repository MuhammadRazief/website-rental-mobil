import { createApp } from 'vue'
import "@/assets/style/main.scss";
import App from './App.vue'
import router from './router/Index.js'
import i18n from './i18n.js'

createApp(App)
.use(router)
.use(i18n)
.mount('#app')

