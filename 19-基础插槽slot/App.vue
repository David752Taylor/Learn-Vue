<template>
  <div>
    <MyDialog>你确认要退出本系统么?</MyDialog>
    <MyDialog>你确认要退出本游戏么?</MyDialog>
    <MyDialog></MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue"
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>