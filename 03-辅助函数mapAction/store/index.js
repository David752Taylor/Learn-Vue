import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    title: '大标题',
    count: 100
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
    }
  },
  actions: {
    // 未分模块，可当成store仓库
    changeCountAction (context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  }
})

export default store
