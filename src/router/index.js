import Vue from 'vue'
import Router from 'vue-router'

import Signup from '../components/user/Signup.vue'
import Signin from '../components/user/Signin.vue'
import Profile from '../components/user/Profile.vue'
import PostsList from '../components/posts/PostsList.vue'
import Post from '../components/posts/Post.vue'
import CreatePost from '../components/posts/CreatePost.vue'

Vue.use(Router)

export default new Router({
    routes: [
       { path: '/signup', name: 'signup', component: Signup},
       { path: '/signin', name: 'signin', component: Signin},
       { path: '/profile', name: 'profile', component: Profile, meta: {requiresAuth: true}},
       { path: '/', name: 'postsList', component: PostsList,
            children: [
                { path: 'post', component: Post, meta: {requiresAuth: true}}
            ]
        },
        { path: '/createpost',name: 'createPost', component: CreatePost, meta: {requiresAuth: true}},
        { path: '/*', redirect:'/profile'}
    ],
    mode: 'history'
})