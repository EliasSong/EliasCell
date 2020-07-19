import Vue from 'vue'
import router from "./router";
import App from './App.vue'
import Waterfall from 'vue-waterfall2'

import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Waterfall)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
