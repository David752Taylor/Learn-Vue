import './assets/main.css'

// 保证每个实例的独立性
import { createApp } from 'vue'
import App from './App.vue'

// mount设置挂载点 #app (id为app的盒子)
createApp(App).mount('#app')
