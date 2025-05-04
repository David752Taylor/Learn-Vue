import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局注册指令


new Vue({
  render: h => h(App),
}).$mount('#app')
