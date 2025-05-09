<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="addCount(1)">值 + 1</button>
    <button @click="addCount(5)">值 + 5</button>
    <button @click="addCount(10)">值 + 10</button>
    <button @click="handleChange(666)">1s后修改666</button>
    <button @click="listAdd(666)">数组添加数据666</button>

    <hr>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
    <div>{{ filterList }}</div>

    <hr>
    <div>访问模块 state</div>
    <div>{{ $store.state.user.userInfo.name }}</div>
    <div>{{ $store.state.setting.theme }}</div>

    <hr>
    <div>访问模块 getters</div>
    <div>{{ $store.getters['user/UpperCaseName'] }}</div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count', 'title']),
    ...mapGetters(['filterList'])
  },
  methods: {
    ...mapMutations(['addCount', 'listAdd']),

    handleChange (n) {
      this.$store.dispatch('changeCountAction', n)
    }
    // ...mapActions(['changeCountAction'])
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
