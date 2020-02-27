// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:3000/web/api'
})
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import Card from './components/Card.vue'
Vue.component('m-card', Card)
import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

import './assets/iconfont/iconfont.css'
import './style.scss'
import './_variables.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
