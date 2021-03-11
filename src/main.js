
// 导入vue
import Vue from 'vue'

// 导入根组件
import App from './App.vue'

// 导入路由
import router from './router/index.js'

// 导入mint-ui


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
