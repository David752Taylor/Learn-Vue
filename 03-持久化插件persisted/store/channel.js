import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useChannelStore = defineStore('channel', ()=>{
  // 声明数据
  const channelList = ref([])

  // 操作数据方法
  // 异步方法
  const getList = async ()=>{
    const {data: {data}} = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelList.value = data.channels
    console.log(data.channels);
  }

  // 计算属性

  // 导出
  return{
    channelList,
    getList
  }
})
