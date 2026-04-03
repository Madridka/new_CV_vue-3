import { createApp } from 'vue'
import '@/assets/styles/main.css'
import App from './App.vue'
import primeVue3 from '@/plugins/primevue/primevue'

const app = createApp(App)

app.use(primeVue3)
app.mount('#app')
