import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import i18n from '@/i18n'

import routes from '@/routes'
import store from '@/store'

import EventBus from '@/plugins/event-bus'

import msToMm from '@/filters/ms-to-mm'

import blur from '@/directives/blur'

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  i18n
})
