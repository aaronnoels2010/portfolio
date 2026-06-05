import { createApp } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '@/assets/styles/main.css'
import App from './App.vue'

gsap.registerPlugin(ScrollTrigger)

createApp(App).mount('#app')
