import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vue3Toastify, {
  theme: 'dark',
  autoClose: 3000
} as ToastContainerOptions)
app.mount('#app')
