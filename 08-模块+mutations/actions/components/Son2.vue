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
    <div>{{ userInfo.name }}</div>
    <button @click="setUser({name:'tttt',age: 80})">更新个人信息</button>
    <button @click="setUserSecond({name:'xxxx',age: 40})">1s后更新个人信息</button>
    <div>{{ setting.theme }}</div>
    <button @click="setTheme('dark')">更新主题色</button>
    <button @click="setThemeSecond('red')">1s后更新主题色</button>

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
    // 拿到的根级别的映射，是setting对象
    ...mapState(['count', 'setting']),

    // 直接拿到模块内数据，需要namespaced
    ...mapState('user', ['userInfo', 'score']),
    ...mapState('setting', ['theme', 'desc']),

    // 拿到的计算属性
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // 拿到的同步方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapMutations('user', ['setUser']),
    ...mapMutations('setting', ['setTheme']),

    // 拿到的异步方法
    ...mapActions(['changeCountAction']),
    ...mapActions('user', ['setUserSecond']),
    ...mapActions('setting', ['setThemeSecond'])
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
