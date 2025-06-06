<script setup>
// 有setup无法直接配置props选项

// 借助 编译器宏 接收子组件的数据
const props = defineProps({
  car: String,
  money: Number
})

// script访问数据
console.log(props.car)
console.log(props.money)

// 声明事件
const emit = defineEmits(['changeMoney'])

const buy = ()=>{
  emit('changeMoney', 5)
}



</script>

<template>
  <!-- 模板访问数据 -->
  <div class="son">
    我是子组件 - {{ car }} - {{ money }}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>
