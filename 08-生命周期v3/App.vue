<script setup>
import { onMounted } from 'vue'

// beforeCreate 和 created 直接写在外面（setup）
const getList = ()=>{
  setTimeout(()=>{
    console.log('发送请求，获取数据')
  }, 2000)
}

getList()

// 挂载阶段执行
onMounted(()=>{
  console.log('mounted生命周期函数-1')
})
// 写成函数的调用方式，可调用多次
onMounted(()=>{
  console.log('mounted生命周期函数-2')
})

</script>

<template>
  <div></div>
</template>
