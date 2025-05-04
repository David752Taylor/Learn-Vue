<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{ data }}</p>  
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  data(){
    return{
      data:''
    }
  },
  created(){
    Bus.$on('handle',(msg)=>{
      console.log('收到消息：'+msg);
      this.data = msg
    })
  }
}
</script>

<style scoped>
.base-a {
  width: 200px;
  height: 200px;
  border: 3px solid #000;
  border-radius: 3px;
  margin: 10px;
}
</style>