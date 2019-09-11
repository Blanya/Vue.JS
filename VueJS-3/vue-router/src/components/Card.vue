<template>
  <div class="card">
    <h3>{{cardTitle}}</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <button @click="sendTitle">En savoir plus</button>
  </div>
</template>

<script>
export default {
    name:"card",
    props:['cardTitle'],
    methods:{ sendTitle: function()
    {
        this.$emit("sendTitle", this.cardTitle)
    }
    }
}

// Utilisation kebab-case et non kamel-case ATTENTION ( utilisation Kamel-case fonctionnelle ici ?)
</script>
