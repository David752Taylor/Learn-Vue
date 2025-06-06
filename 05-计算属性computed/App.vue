
<script setup>
// 数据
const message = 'hello Vue3'
// 函数
const logMessage = ()=>{
  console.log(message)

}

// reactive响应式数据
import {reactive} from 'vue'
const state = reactive({
  count: 100
})
const setCount = ()=>{
  state.count++
}

// ref响应式数据
import {ref} from 'vue'
const count1 = ref(0)
const setCount1 = ()=>{
  count1.value++
}

// computed计算属性
import {computed} from 'vue'
// 计算属性：只读（传入函数）
const sum = computed(()=>{
  return state.count + count1.value
})
// 计算属性：可读可写（传入对象）
const sum1 = computed({
  get: () => state.count + count1.value,
  set: (val) => {
    state.count = val - count1.value
  }
})
const resetFn = ()=>{
  sum1.value=50
}

</script>

<template>
  <div>{{message}}</div>
  <button @click="logMessage">输出</button>
  <!-- 访问reactive数据 -->
  <div>reactive响应式数据：{{ state.count }}</div>
  <button @click="setCount">+1</button>

  <!-- 访问ref数据 -->
  <div>ref响应式数据：{{ count1 }}</div>
  <button @click="count1++">+1</button>
  <button @click="setCount1">+1</button>

  <!-- 计算属性computed -->
  <div>计算属性(基础)：{{ sum }}</div>
  <div>计算属性(完整)：{{ sum1 }}</div>

  <button @click="resetFn">重置</button>

</template>

