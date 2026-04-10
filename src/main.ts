import { createApp } from 'vue'
import '@/assets/styles/main.css'
import App from './App.vue'
import primeVue3 from '@/plugins/primevue/primevue'
import i18n from '@/plugins/i18n/i18n'

const app = createApp(App)

app.use(primeVue3)
app.use(i18n)
app.mount('#app')
