<template>
  <div class="FstList">
    <input type="text" v-model="listTitle">
    <h1>{{listTitle}}</h1>
    <Task></Task>
  </div>
</template>

<script>
import Task from './Task'

export default {
    name: "List",
    components:{
        Task
    },
    data: function(){
      return{
        listTitle:'',
      }
    },
}
</script>
