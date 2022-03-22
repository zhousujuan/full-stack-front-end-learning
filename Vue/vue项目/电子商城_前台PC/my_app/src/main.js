import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入浏览器的重置样式
import './styles/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
