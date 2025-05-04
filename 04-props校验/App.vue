<template>
  <div class="app">
    <BaseProgress :w="width"></BaseProgress>
  </div>
</template>

<script>

import BaseProgress from './components/BaseProgress.vue';
export default {
  components:{
    BaseProgress,
  },
  data(){
    return {
        width: 30,
    }
  }
}
</script>

<style>

</style>