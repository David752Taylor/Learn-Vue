<script setup>
import MyInput1 from './components/my-input1.vue';
import MyInput from './components/my-input.vue';
import { ref } from 'vue';

const txt = ref('123456')
const txt1 = ref('654321')

</script>

<template>
<div>
  <!-- vue2双向绑定 v-model -->
  <!-- <MyInput v-model="txt"></MyInput> {{ txt }} -->
  vue2写法：{{ txt }}
  <MyInput v-model="txt"></MyInput>
  <!-- v-model原理，两者写法等价 -->
  <MyInput :modelValue="txt" @update:modelValue="txt=$event"></MyInput>
</div>
<div>
  defineModel写法：{{ txt1 }}
  <!-- v-model语法糖 -->
  <MyInput1 v-model:aaa="txt1" ></MyInput1>
</div>
</template>
