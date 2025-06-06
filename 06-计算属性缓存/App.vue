<script setup>
import {ref, computed} from 'vue'
const list = ref([1,2,3,4,5,6,7,8,9])
const cmpList = computed(()=>{
  return list.value.filter(item=> item>2)
})
const now = computed(() => Date.now())

const addFn = ()=>{
  list.value.push(666)
}

</script>

<template>
<div>
  <div>原始数据：{{ list }}</div>
  <div>计算属性：{{ cmpList }}</div>
  <div>计算属性：{{ now }}</div>
  <button @click="addFn">修改</button>
</div>
</template>
