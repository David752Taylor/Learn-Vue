import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  // 同 Vuex
  state: () => ({ count: 0, name: 'Eduardo' }),
  // 同 Vuex
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // 区别 Vuex（通过state参数访问内部变量）
  // 合并 mutation & actions
  actions: {
    increment() {
      // 通过this访问内部变量
      this.count++
    },
  },
})

