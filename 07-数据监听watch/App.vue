<script setup>
import {ref, watch} from 'vue'
const count = ref(0)
const nickname = ref('张三')
const info = ref({
  name: '王五',
  age: 18
})

// 监视单个数据变化,无需写数组

// 监视多个数据变化（数组）
// watch内的响应式数据，已自动解包，无需.value
watch(
  [count,nickname],
  ([newCount,newNickname],[oldCount,oldNickname]) => {
    console.log(`旧值为：${oldCount} + ${oldNickname}`)
    console.log(`新值为：${newCount} + ${newNickname}`)
  },
  {
    immediate: true,  // immediate 立刻执行
    deep: true  // deep 深度监视
  }
)

// 精确监听对象某个属性（set写法，需要.value）
watch(
  ()=>info.value.age, //改为箭头函数
  (newAge,oldAge)=>console.log(`新值：${newAge}, 旧值：${oldAge}`)
)

watch(
  info,
  (newInfo,oldInfo)=>{
    console.log(`旧值：${oldInfo.value}`)
  }
)

const changeCount = ()=>{
  count.value++
}
const changeNickname = ()=>{
  nickname.value = '李四'
}
const changeInfoAge = ()=>{
  info.value.age++
}
const changeInfoName = ()=>{
  info.value.name = '1111'
}
</script>

<template>
<div>{{ count }}</div>
<button @click ="changeCount">改数字</button>
<div>{{ nickname }}</div>
<button @click = "changeNickname">改昵称</button>
<div>{{ info.age }}</div>
<button @click="changeInfoAge">改年龄</button>
<div>{{ info.name }}</div>
<button @click="changeInfoName">改姓名</button>
</template>
