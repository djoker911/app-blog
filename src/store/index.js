import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setCountAdd (state) {
            state.count ++ ;
        },
        setCountMinus (state) {
            state.count --;
        }
    },
    actions: {
        add1({commit}) {
            commit('setCountAdd')
        },
        minus1({commit}) {
            commit('setCountMinus')
        }
    },
    getters: {

    },
    modules: {

    }
})