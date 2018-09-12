import Vue from 'vue'
import Router from 'vue-router'

import Signup from '../components/user/Signup.vue'
import Signin from '../components/user/Signin.vue'
import Profile from '../components/user/Profile.vue'

Vue.use(Router)

export default new Router({
    routes: [
       { path: '/signup', name: 'signup', component: Signup},
       { path: '/signin', name: 'signin', component: Signin},
       { path: '/profile', name: 'profile', component: Profile},
       { path: '/*', redirect:'/profile'}
    ],
    mode: 'history'
})