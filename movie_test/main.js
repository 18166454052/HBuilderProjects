import Vue from 'vue'
import App from './App'
import status from './components/status.vue'

// 全局注册组件
Vue.component('page-status',status)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
