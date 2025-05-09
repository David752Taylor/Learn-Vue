<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeCountAction(888)">1s后改为888</button>
    <button @click="changeTitle('前端程序员')">改标题</button>

    <hr>
    <div>{{ user.userInfo.name }}</div>
    <div>{{ setting.theme }}</div>

    <hr>
    <div>user模块数据：{{ userInfo.name }} - {{ score }}</div>
    <div>setting模块数据：{{ theme }} - {{ desc }}</div>

    <hr>
    <div>{{ UpperCaseName }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    // 拿到的根级别的映射，是user，setting对象
    ...mapState(['count', 'user', 'setting']),

    // 直接拿到模块内数据，需要namespaced
    ...mapState('user', ['userInfo', 'score']),
    ...mapState('setting', ['theme', 'desc']),

    // 拿到的计算属性
    ...mapGetters(['filterList']),
    ...mapGetters(['user', ['UpperCaseName']])
  },
  methods: {
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
