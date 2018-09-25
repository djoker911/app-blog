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
        },
        removePost(state, payload) {
            state.posts = state.posts.filter(post => post.id != payload.domainInfoId)
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
            
        },
        deletePost({commit}, payload) {
            console.log('in deletePost')
            console.log(payload.group)
            axios.delete('/api/v1/domain/group/'+payload.group+'/id/'+payload.domainInfoId)
            .then((response) => {
                commit('removePost', payload)
            }).catch(()=>{
                console.log('something wrong when delete')
            })
            
        },
        createPost({commit},payload) {
            console.log(payload)
            return new Promise((resolve, reject)=>{
                axios.post('/api/v1/domain', payload)
                .then((response) => {
                    console.log('create done in createPost')
                    resolve()
                }).catch(() =>{
                    reject()
                })
            })
        },
        editPost({commit},payload) {
            console.log(payload)
            return new Promise((resolve, reject)=>{
                axios.put('/api/v1/domain', payload)
                .then((response) => {
                    console.log('edit done in createPost')
                    resolve()
                }).catch(() =>{
                    reject()
                })
            })
        }

        
    },
    
    getters: {

    },
    modules: {
    }
}