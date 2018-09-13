import axios from 'axios'
export default {
    state: {
        user: null,
        loading: false
     },
     mutations: {
        setUser (state, payload) {
            state.user = payload
        }
     },
     actions: {
         onSubmitSignup({commit}, payload) {
             console.log(payload)
             return new Promise((resolve, reject) => {
                 axios.post('/api/v1/registration', payload)
                     .then((response) => {
                         console.log("yooooooo")
                         console.log(response.data.msg)
                         console.log(response.data.status)
                         
                         if(response.data.success === true){
                            commit('setUser', response.data)
                            resolve()
                         }
                         else{
                            reject(response.data.msg)  
                         }
                     }).catch((err) =>{
                         reject(err.response.data)
                     })
             })
         }
     },
    getters: {
        
    },
    modules: {
    }
}