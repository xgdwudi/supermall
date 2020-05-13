import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
import vuelazyload from 'vue-lazyload'
import FastClick from 'fastclick'

import toast from './components/content/toast'


Vue.config.productionTip = false
//vue实例作为事件总线
Vue.prototype.$bus=new Vue()
//安装toast
Vue.use(toast)
//懒加载
Vue.use(vuelazyload,{
  loading:require('./assets/img/detail/detail_bottom.png')
})
//解决300猫喵延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
