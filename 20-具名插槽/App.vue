<template>
  <div>
    <MyDialog>
      <template #head>
        友情提示
      </template>
      <template #content>
        你确认要退出本系统么?
      </template>
      <template #bottom>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>
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