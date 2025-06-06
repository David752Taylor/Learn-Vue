<script>
export default{
  // setup特点：
  // 1.执行时机早于 beforeCreate
  // 2.获取不到this(undefined) - 基本不使用this
  // 3.数据 和 函数，需在setup最后return，才能在模板中应用
  setup(){
    console.log('setup函数')
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = ()=>{
      console.log(message)
    }
    return{
      message,
      logMessage
    }
  },
  beforeCreate(){
    console.log('beforeCreate函数')
  }
}
</script>

<template>
  <div>{{message}}</div>
  <button @click="logMessage">按钮</button>
</template>
