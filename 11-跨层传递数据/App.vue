<script setup>
import CenterCom from './components/center-com.vue';

import { provide, ref } from 'vue';

const count = ref(100)

// 传递普通数据
provide('theme-color','pink')

// 跨层传递响应式数据
provide('count', count)

// 跨层传递函数(提供修改数据的方法)
provide('changeCount', (newCount)=>{
  count.value = newCount
})


setTimeout(()=>{
  count.value = 500
},2000)

</script>

<template>
<div>
  <h1>我是顶层组件</h1>
  <CenterCom></CenterCom>
</div>
</template>
