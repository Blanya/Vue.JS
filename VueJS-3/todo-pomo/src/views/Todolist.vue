<template>
  <div>
    <div class="todolist">
    <h1>{{listTitle}}</h1>
    <list  v-for="list in lists" :key="list" class="list"></list>
    </div>
    <button @click="addList">Ajouter une liste</button>
    <button @click="remove">Supprimer les listes</button>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
import List from '@/components/List.vue'

export default {
    name: "todolist",
    data: function(){
      return{
        listTitle:'',
        lists:[List]
      }
    }, 
    components:
    {
      Task,
      List
    },
    methods:{
      addList: function(){
            this.lists.push({
            List: this.List})
      },
      remove: function(){
        this.lists=[]
      }
    }
    
   
}
</script>
<style scoped>
.todolist
{
  display: flex;
  flex-wrap: wrap;
}
button
{
  width: 10vw;
  height: 2vw;
  background-color: lavender;
}
</style>
