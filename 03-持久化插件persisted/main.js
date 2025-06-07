import { createApp } from 'vue'
// 导入pinia
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建pinia
const pinia = createPinia()
const app = createApp(App)
// 使用 persistedstate 挂载到pinia后面
// 使用pinia，必须在挂载到app之前
app.use(pinia.use(piniaPluginPersistedstate))
app.mount('#app')
// 支持链式
// createApp(App).use(pinia).mount('#app')
