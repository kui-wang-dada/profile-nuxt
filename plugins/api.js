import Vue from 'vue'
import api from '~/config/axios/api.js'

Vue.prototype.$api = api
Vue.use(api)
