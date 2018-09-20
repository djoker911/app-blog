import Vue from 'vue'
import Router from 'vue-router'

import Signup from '../components/user/Signup.vue'
import Signin from '../components/user/Signin.vue'
import Profile from '../components/user/Profile.vue'
import PostsList from '../components/posts/PostsList.vue'
import Post from '../components/posts/Post.vue'
import CreatePost from '../components/posts/CreatePost.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
       { path: '/signup', name: 'signup', component: Signup},
       { path: '/signin', name: 'signin', component: Signin},
       { path: '/', name: 'home', component: Home, meta: {requiresAuth: true}},
       { path: '/profile', name: 'profile', component: Profile, meta: {requiresAuth: true}},
       { path: '/postsList', name: 'postsList', component: PostsList,meta: {requiresAuth: true}},
        { path: '/createPost',name: 'createPost', component: CreatePost, meta: {requiresAuth: true}},
        { path: '/*', redirect:'/signin'}
    ],
    mode: 'history'
})