import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;
export default {
    state: {
        user: null,
        loading: false
     },
     mutations: {
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        }
     },
     actions: {
         onSubmitSignup({commit}, payload) {
             console.log(payload)
             commit('setLoading', true)
             return new Promise((resolve, reject) => {
                 axios.post('/api/v1/registration', payload)
                     .then((response) => {
                         console.log("yooooooo")
                         console.log(response.data.msg)
                         console.log(response.data.status)
                         
                         if(response.data.success === true){
                            commit('setUser', response.data)
                            commit('setLoading', false)
                            resolve()
                         }
                         else{
                            commit('setLoading', false)
                            reject(response.data.msg)  
                         }
                     }).catch((err) =>{
                         reject(err.response.data)
                     })
             })
         },
        onSubmitSignin({commit}, payload){
            commit('setLoading', true)
            return new Promise((resolve, reject) =>{
                axios.post('/api/v1/login', payload)
                .then((response) => {
                    console.log('lalalalal')
                    console.log(response)
                    console.log(response.data.data)
                    window.localStorage.setItem('token', response.data.data)
                    commit('setUser', response.data)
                    commit('setLoading', false)
                    resolve()
                }).catch(() =>{
                    commit('setLoading', false)
                    reject()
                })
            })
        },
        checkToken({commit}) {
            return new Promise((resolve, reject) =>{
                var token = window.localStorage.getItem('token')
                axios.get('/api/v1/page-authentication',{withCredentials: true})
                .then((response) => {
                    commit('setUser', response.data)
                    resolve()
                }).catch(() => {
                    window.localStorage.removeItem('token')
                    reject()
                })
            })
        },
        onUserLogout({commit}) {
            let token = window.localStorage.getItem('token')
            return new Promise((resolve, reject) => {
                axios.get('/api/v1/logout')
                .then((response) => {
                    window.localStorage.removeItem('token')
                    commit('setUser', null)
                    resolve()
                }).catch(() => {
                    reject();
                })
            })
        }
     },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    modules: {
    }
}