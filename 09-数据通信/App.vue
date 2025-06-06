<script setup>
// 局部组件，导入进来就能用
import sonCom from '@/components/son-com.vue'
import {ref} from 'vue'

const money = ref(100)
const getMoney = ()=>{
  money.value += 10
}

const changeFn = (newMoney) => {
  money.value = newMoney
}
</script>

<template>
  <div>
    <h3>父组件 - {{ money }}</h3>
    <button @click="getMoney">挣钱</button>

    <!-- 父亲传入数据 -->
    <sonCom car="宝马车" :money="money" @change-money="changeFn"></sonCom>
  </div>
</template>
