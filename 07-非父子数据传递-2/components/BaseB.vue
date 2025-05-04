<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <input type="text" v-model="name">
    <button @click="sendMsg(name)">发送消息</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus'

export default {
  data(){
    return {
      name:''
    }
  },
  methods:{
    sendMsg(msg){
      Bus.$emit('handle',msg)
      this.name=''
    }
  }
}
</script>

<style scoped>
.base-b {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>