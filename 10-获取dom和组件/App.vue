<script setup>
import testCom from './components/test-com.vue';

// 模板引用（获取dom / 组件）
import {onMounted, ref} from 'vue'

// 创建ref对象——————1
const inp = ref(null)
const com = ref(null)

// 挂载才能后访问元素
onMounted(()=>{
  console.log(inp.value); //输出dom元素
})

// 定义点击事件方法
const clickFn = ()=>{
  inp.value.focus()
  console.log(inp.value.value); //输出元素的value值
}

const getCom = ()=>{
  console.log(com.value)  //输出组件对象
  com.value.sayHi() //获取组件内部方法
}

</script>

<template>
  <div>
    <!-- dom元素 绑定ref对象——————2 -->
    <input type="text" ref="inp">
    <button @click="clickFn">点击让输入框聚焦（dom）</button>
  </div>
  <!-- 组件 绑定ref对象——————2 -->
  <testCom ref="com"></testCom>
  <button @click="getCom">点击获取组件</button>
</template>
