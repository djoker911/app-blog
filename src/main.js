import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import moment from 'moment'
import VueMoment from 'vue-moment'

import router from './router'
import store from './store'


Vue.use(VueAxios, axios)
Vue.use(VueMoment, moment)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkToken').then(() => {
      next()
    }).catch(() =>{
      next('/signin')
    })
  } else {
    next() 
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
