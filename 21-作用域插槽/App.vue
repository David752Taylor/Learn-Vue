<template>
  <div>
    <MyTable :data="list">
      <template #default="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <template #default="obj">
        <button @click="show(obj.row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  components: {
    MyTable
  },
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods:{
    del(id){
      this.list = this.list.filter(item=>item.id!==id)
    },
    show(row){
      alert(`姓名：${row.name}\n年龄：${row.age}`)
    }
  }
}
</script>
