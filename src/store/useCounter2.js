import { defineStore, ref, computed } from "pinia";

// 存放相同的模块整体
export const useCounterStore = defineStore('counter', () => {
  // 声明数据
  const count = ref(0)
  const name = ref('Eduardo')
  // 声明 getters
  const doubleCount = computed(() => count.value * 2)
  // 操作数据的方法
  function increment() {
    count.value++
  }
  return { count, name, doubleCount, increment }
})

