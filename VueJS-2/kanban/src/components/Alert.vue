<template>
    <div @click="change()" :class="text">
        {{help}} {{message}}
    </div>
</template>

<script>
export default {
    name: "Alert",
    props: ['message'],
    data: function(){
        return{
            help: "Besoin d'aide?",
            text: "alert alert-primary",
        }
    },
    methods: {
        change: function()
        {
            if(this.text=== "alert alert-primary"){
            this.text= "alert alert-second"}
            else{this.text = "alert alert-primary"}
        }
    }

}
</script>

<style lang="scss">
        .alert {
        position: relative;
        padding: .75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        margin-top: 2em;
    }

    .alert-primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }

    .alert-second {
        color:green;
        background-color: lightgreen;
    }
</style>