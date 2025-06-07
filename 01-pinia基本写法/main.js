import { createApp } from 'vue'
// 导入pinia
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建pinia
const pinia = createPinia()
const app = createApp(App)

// 使用pinia，必须在挂载之前
app.use(pinia)
app.mount('#app')
// 支持链式
// createApp(App).use(pinia).mount('#app')
