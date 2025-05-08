<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="addCount(1)">值 + 1</button>
    <button @click="addCount(5)">值 + 5</button>
    <button @click="addCount(10)">值 + 10</button>
    <button @click="handleChange(666)">一件修改666</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    ...mapMutations(['addCount']),

    // handleChange (n) {
    //   this.$store.dispatch('changeCountAction', n)
    // }
    ...mapActions(['changeCountAction'])
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
