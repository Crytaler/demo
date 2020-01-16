import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menus: []
  },
  mutations: {
    initRoutes (state, data) {
      state.menus = data
    }
  }
})

export default store
