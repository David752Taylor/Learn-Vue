const state = {
  theme: 'light',
  desc: '测试demo'
}
const mutations = {
  setTheme (state, newTheme) {
    state.theme = newTheme
  }
}
const actions = {
  setThemeSecond (context, newTheme) {
    setTimeout(() => {
      context.commit('setTheme', newTheme)
    }, 1000)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
