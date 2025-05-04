<template>
  <div class="app">
    <BaseSelect :cityId="cityId" @changeId="cityId = $event"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  components:{
    BaseSelect,
  },
  data(){
    return {
      cityId: '104'
    }
  },
  methods:{
    
  }
  
}
</script>

<style>
</style>