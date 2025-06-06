<script setup>
// 传统方式
// 1.接收数据
defineProps({
  modelValue: String
})
// 2.发送数据
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input type="text" :value="modelValue" @input="e => emit('update:modelValue', e.target.value)">
  </div>
</template>
