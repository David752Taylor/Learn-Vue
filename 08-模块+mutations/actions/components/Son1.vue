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
    <button @click="updateUser">更新个人信息</button>
    <button @click="updateUser2">1s后更新个人信息</button>
    <div>{{ $store.state.setting.theme }}</div>
    <button @click="updateTheme">更新主题色</button>
    <button @click="updateTheme2">1s后更新主题色</button>

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
    },
    updateUser () {
      this.$store.commit('user/setUser', {
        name: 'David',
        age: 25
      })
    },
    updateUser2 () {
      this.$store.dispatch('user/setUserSecond', { name: 'Alice', age: 28 })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'green')
    },
    updateTheme2 () {
      this.$store.dispatch('setting/setThemeSecond', 'skyblue')
    }
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
