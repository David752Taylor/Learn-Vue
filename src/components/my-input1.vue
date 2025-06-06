<script setup>
// vue3.3版本需要写
// import { defineModel } from 'vue';
const modelValue1 = defineModel('aaa')
</script>

<template>
  <div>
    <input type="text" v-model="modelValue1">
  </div>
</template>
