import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  getters: {
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  mutations: {
    addCount (state, n) {
      state.count += n
    },
    subCount (state, n) {
      state.count -= n
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    changeCount (state, newValue) {
      state.count = newValue
    },
    listAdd (state, newValue) {
      state.list.push(newValue)
    }
  },
  actions: {
    // 未分模块，可当成store仓库
    changeCountAction (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  modules: {
    user,
    setting
  }
})

export default store
