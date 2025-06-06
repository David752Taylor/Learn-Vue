<script setup>
// 数据
const message = 'hello Vue3'
// 函数
const logMessage = ()=>{
  console.log(message)

}
import {reactive} from 'vue'
// 定义响应式数据（在reactive里面，外面用一个变量名接受）
const state = reactive({
  count: 100
})

import {ref} from 'vue'
// 本质：在原有数据基础上，外层包了一层对象
// 底层：包成复杂数据类型后，再借助 reactive 实现响应式
// 访问数据，需要通过.value
// 基本都用const声明，可以修改对象属性值（.value）
const count1 = ref(0)

const setCount = ()=>{
  state.count++
}
const setCount1 = ()=>{
  count1.value++
}
</script>

<template>
  <div>{{message}}</div>
  <button @click="logMessage">输出</button>
  <div>reactive响应式数据：{{ state.count }}</div>
  <button @click="setCount">+1</button>
  <div>ref响应式数据：{{ count1 }}</div>
  <button @click="setCount1">+1</button>
  <button @click="count1++">+1</button>
</template>
