<template>
  <div class="FstList" :class="{active: seen}">
    <button @click="remove()">X</button>
    <input type="text" v-model="listTitle" @keydown="addTitle">
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
        seen: false,
        titles: [],
      }
    },
    mounted() {
    if(localStorage.getItem('titles')) {
        try {
        this.titles= JSON.parse(localStorage.getItem('titles'));
      } catch(e) {
        localStorage.removeItem('titles');
      }
    }
    },
    methods:{
      remove: function()
      {
        this.seen
      }
    }
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
.active
{
  display: none;
}

</style>
