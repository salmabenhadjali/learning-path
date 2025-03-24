import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Salma',
      age: 27,
    },
  },
  mutations: {
    setName(state, newName) {
      state.user.name = newName
    },
    setAge(state, newAge) {
      state.user.age = newAge
    },
  },
  actions: {
    updateName({ commit }, newName) {
      commit('setName', newName)
    },
    updateAge({ commit }, newAge) {
      commit('setAge', newAge)
    },
  },
  getters: {
    user: state => state.user,
  },
})
