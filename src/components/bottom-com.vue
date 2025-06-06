<script setup>
import { inject } from 'vue';

const count = inject('count')
const themeColor = inject('theme-color')
const changeCount = inject('changeCount')
const changeFn = ()=> {
  changeCount(1000)
}
</script>

<template>
<div>
  <h3>我是底层组件 - {{ themeColor }} - {{ count }}</h3>
  <button @click="changeFn">更新Count</button>
</div>
</template>
