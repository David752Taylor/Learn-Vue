import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', ()=>{
  // 声明数据
  const count = ref(100)
  const msg = ref('hello pinia')
  const save = {
    me: 'saved',
    notMe: 'not-saved'
  }
  // 操作数据方法
  const addCount = ()=> count.value++
  const subCount = ()=> count.value--

  // 计算属性
  const double = computed(()=>count.value*2)

  // 导出
  return {
    count,
    msg,
    addCount,
    subCount,
    double,
    save
  }
},
{
  // 开启当前模块持久化
  // persist: true
  key: 'my-counter',
  paths: ['count', 'save.me']
})
