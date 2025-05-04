<template>
  <div class="SonA">我是SonA组件
    <GrandSon></GrandSon>
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  components:{
    GrandSon,
  },
  data(){
    return {
      color: 'pink',
      userInfo: {
        name: 'zs',
        age: 18,
      }
    }
  },
  provide(){
    return {
      color:this.color,
      userInfo:this.userInfo,
    }
  },
  methods:{

  }
}
</script>

<style>
.SonA {
  border: 3px solid #000;
  border-radius: 6px;
  margin: 10px;
  height: 200px;
}
</style>