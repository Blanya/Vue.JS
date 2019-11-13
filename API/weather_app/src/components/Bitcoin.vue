<template>
    <div class="bitcoin">
        <h2>Comparaison Bitcoin</h2>
            Euro: <span v-if="info">{{info.bpi.EUR.rate}}e</span>
        <button @click="getInfos">Récupérer les infos</button>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:"Bitcoin",
    data: function()
    {
        return {
            info: null
        }
    },
    methods: {
        getInfos: function()
        {
            axios
                .get("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then(response =>(this.info= response.data))
                console.log(this.info)
                //assynchrone => console.log s'éxecute avant, plusieurs actions en //, ne se fait pas ligne par ligne 
        }
    },
    created(){
        axios
                .get("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then(response =>(this.info= response.data))
    }
}
</script>