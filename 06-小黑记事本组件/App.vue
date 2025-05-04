<template>
  <!-- 主体区域 -->
  <section id="app">
    <!-- 输入框 -->
    <TodoHeader @add="handleAdd"></TodoHeader>

    <!-- 列表区域 -->
    <TodoMain :list="list" @del="handelDel"></TodoMain>
    
    <!-- 统计和清空 -->
    <TodoFooter :list="list" @clear="clearList" v-show="list.length"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
      {id:1, name:'打篮球'},
      {id:2, name:'看电影'},
      {id:3, name:'逛街'}
      ]
    }
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods:{
    handleAdd(todoName){
      this.list.unshift({id:+new Date(),name: todoName})
    },
    handelDel(id){
      this.list = this.list.filter(item=>item.id!==id)
    },
    clearList(){
      this.list = []
    }
  },
  watch:{
    list:{
      deep: true,
      handler(newValue){
        localStorage.setItem('list',JSON.stringify(newValue))
      }
    }
  }
}
</script>

<style>

</style>
