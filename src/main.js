import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import axios from 'axios'
import jQuery from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

global.jQuery = jQuery
global.$ = jQuery
Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.prototype.$baseurl = 'https://randomuser.me/'

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
