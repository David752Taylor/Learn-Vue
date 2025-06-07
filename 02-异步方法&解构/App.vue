<script setup>
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCounterStore } from '@/store/counter'
import { useChannelStore } from '@/store/channel'

const counterStore = useCounterStore()
const channelStore = useChannelStore()

// 数据结构需包一层 storeToRefs
import { storeToRefs } from 'pinia'
// counter开启了持久化插件
const {count, msg} = storeToRefs(counterStore)
// storeToRefs 可直接解构 state、getters
const {double} = storeToRefs(counterStore)
const {getList} = useChannelStore
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{counterStore.count}} - {{ double }} - {{ counterStore.msg }}</h3>
    <h3>解构赋值 - {{ count }} - {{ msg }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道数据</button>
    <ul>
      <!-- 不解构时，通过 接收仓库的函数名.属性值 访问 -->
      <li v-for="item in channelStore.channelList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
