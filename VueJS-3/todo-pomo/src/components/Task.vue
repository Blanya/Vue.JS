<template>
    <div>
    <h1>{{listTitle}}</h1>
    <input type="text" name="" id="" v-model="toDoText">
    <button @click="addNewThing" type="button"> Add </button>
    <ul ><li :class="{bClass: thing.seen}" v-for="(thing, index) in things" :key="thing"><input type="checkbox" name="" id="" v-model="thing.seen"> {{thing.title}} <button @click="remove(index)">X</button></li></ul>
    </div>
</template>

<script>
export default {
    name:"Task",
    data: function()
    {
        return{
            toDoText: '',
            things: 
            [{title:'Première tâche', 
            seen:false,}]
        }
    },
    props:['listTitle'],
    methods: {
        addNewThing: function () 
        {
            this.things.push({
            title: this.toDoText, seen: false,})
            this.toDoText = ' ';
        },
        remove: function(index)
        {
        this.things.splice(index,1)
        },
    }
}
</script>

<style lang="scss">
    .normalClass
    {
        text-decoration: none;
    }
    .bClass
    {
        text-decoration: line-through;
    }
</style>