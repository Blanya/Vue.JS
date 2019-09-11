<template>
    <div id="app">
        <h1>Hello</h1>
        <Alert message="Mon message d'alerte"></Alert>
    </div>
</template>

<script>
import Alert from './components/Alert.vue'
export default {
    name: "app",   //= component('app')
    components:{
        Alert
    }
}
</script>

<style lang="scss">
    $color: red;
    h1{
        background-color: $color;
        width: 20vw;
        margin: 0 auto;
        text-align: center;
    }
</style>