import axios from 'axios'
import user from './user.js'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;

export default {
    state: {
        posts:[{"id":1}, {"id":2}],
        selectPost:null
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload
        }
    },
    actions: {
        getPosts({commit}, payload) {
            console.log(payload)
            return new Promise((resolve, reject) =>{
                var token = window.localStorage.getItem('token')
                console.log('get posts . . . ')
                console.log(payload)
                // console.log('/api/v1/domains/'+payload)
                axios.get('/api/v1/domains/'+payload,{withCredentials: true})
                .then((response) =>{
                    console.log(response.data)
                    commit('setPosts', response.data.data)
                })
            })
            
        }
        
    },
    
    getters: {

    },
    modules: {
    }
}