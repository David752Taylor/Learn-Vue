<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" v-ff>
  </div>
</template>

<script>
export default {
directives:{
  ff:{
    inserted(el){
      el.focus()
    }
  }
}
}
</script>

<style>

</style>