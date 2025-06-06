<script setup>
// 数据
const message = 'hello Vue3'
// 函数
const logMessage = ()=>{
  console.log(message)
}
</script>

<template>
  <div>{{message}}</div>
  <button @click="logMessage">按钮</button>
</template>
