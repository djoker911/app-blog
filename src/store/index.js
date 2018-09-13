import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        name: "Phil"
    },
    mutations: {
        setCountAdd (state) {
            state.count ++ ;
        },
        setCountMinus (state) {
            state.count --;
        },
        setCountAdd10 (state, payload) {
            state.count += payload ;
        },
        setCountMinus10 (state, payload) {
            state.count = state.count - payload;
        }
    },
    actions: {
        add1({commit}) {
            commit('setCountAdd')
        },
        minus1({commit}) {
            commit('setCountMinus')
        },
        add10({commit}, payload) {
            commit('setCountAdd10', payload)
        },
        minus10({commit}, payload) {
            commit('setCountMinus10', payload)
        }
    },
    getters: {
        getCountClick (state) {
            return state.count > 10 ? "big" : "small"
            //return state.count + "click(s)"
        }
    },
    modules: {
        user
    }
})