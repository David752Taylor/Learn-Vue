<template>
  <div id="app">
    <h1>根组件 - {{ title }} - {{ count }}</h1>
    <input type="text" :value="count" @input="changeCount($event.target.value)">
    <!-- this.$store.commit('changeTitle', value) -->
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Son1 from './components/Son1.vue'
import Son2 from './components/Son2.vue'

export default {
  name: 'app',
  data: function () {
    return {
      tt: ''
    }
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  methods: {
    ...mapMutations(['changeCount'])
  },
  components: {
    Son1,
    Son2
  },
  created () {
    console.log(this.$store.state.count)
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
