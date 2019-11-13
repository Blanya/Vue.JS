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
        listTitle:'Titre de la liste',
      }
    },
}
</script>

<style scoped>
.FstList
{
  width: 29.5vw;
  margin: 2em;
  background-color: rgb(231, 214, 220);
  padding-top: 4vh;
}
</style>
