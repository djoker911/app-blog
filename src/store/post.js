import axios from 'axios'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;

export default {
    state: {
        post:[],
        selectPost:null
    },
    mutations: {
    
    },
    actions: {
    
    },
    getters: {

    },
    modules: {
    }
}