import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Toast, { POSITION } from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const options: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  newestOnTop: true,
  closeOnClick: false,
  hideProgressBar: true,
}
app.use(Toast, options)
app.use(router)
app.mount('#app')
