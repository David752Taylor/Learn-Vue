<script setup>
const count = 999
const sayHi = ()=>{
  console.log('打招呼')
}

// 显示暴露组件内的属性和方法
defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    我是用于测试的组件
  </div>
</template>
