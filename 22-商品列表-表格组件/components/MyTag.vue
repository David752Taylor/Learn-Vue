<template>
  <div class="my-tag">
    <input class="input" type="text" placeholder="输入标签" ref="inp" v-if="isEdit" v-focus @blur="isEdit=false" :value="value" @keyup.enter="handleEnter"/>
    <div class="text" @dblclick="handleClick" v-else>
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isEdit: false,
    }
  },
  props:{
    value:String,
  },
  methods:{
    handleClick(){
      this.isEdit=true

      // this.$nextTick(()=>{
      //   this.$refs.inp.focus()
      // })
      
    },
    handleEnter(e){
      if(e.target.value.trim()==='') return alert('标签内容不能为空')
      this.$emit('input',e.target.value)
      this.isEdit = false
    }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>