<template>
    <div class="boss">
        <img src="../assets/img/boss.jpeg" alt="Boss" class="boss"/>
        <div>
        <span class="remaining-points"> {{remainingPoints}} </span>
        <span class="life-points"> / {{lifePoints}} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Boss',
    data: function()
    {
        return{remainingPoints: 50,
                lifePoints: 50}
    }
}
</script>

<style scoped>
    .boss{
        width: 70vw;
    }
</style>