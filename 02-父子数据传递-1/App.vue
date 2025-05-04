<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件{{ myTitle }}
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue';

export default {
  components:{
    Son,
  },
  data(){
    return {
      myTitle: 'Dig'
    }
  },
  methods:{
    handleChange(newTitle){
      this.myTitle = newTitle
    }
  }
}
</script>

<style>

</style>