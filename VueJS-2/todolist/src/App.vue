<template>
  <div id="app">
    <task></task>
    <input type="text" v-model="listName"> 
    <list><h1>{{listName}}</h1></list>
  <button @click="addTitle" type="button"> Enregistrer le nom de la liste</button>
  </div>
</template>

<script>

import Task from './components/Task.vue'
import List from './components/List.vue'
export default {
  name: "app",
  components: {
    Task,
    List
  },
}
</script>

<style lang="scss">

</style>
