const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  score: 80
}
const mutations = {}
const actions = {}
const getters = {
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
