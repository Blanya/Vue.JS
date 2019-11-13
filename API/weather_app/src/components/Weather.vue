<template>
    <div class="weather">
        
        <h1>Météo du jour</h1>
        
        <h2>{{info.name}}</h2>
        <h3>
            {{info.weather[0].description}}
        </h3>
        <h3>
            {{info.main.temp}}°
        </h3>
        <img :src="img" alt="weather"/>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:"Weather",
    data: function(){
        return{
            info: null,
        }
    },
    methods: {
        getDate: function()
        {
            axios
                .get("https://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&APPID=8fe18096708806fa2443917d7258a9d5")
                .then(response =>(this.info= response.data))
        },
        
    },
    created(){
            axios
                .get("https://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&lang=fr&APPID=8fe18096708806fa2443917d7258a9d5")
                .then(response =>(this.info= response.data))
                console.log(this.info)
    },
    computed: {
        img: function() {return this.info= "https://openweathermap.org/img/wn/" + this.info.weather[0].icon + "@2x.png"

        // img: function(){
        //     if (this.info)
        //     {"https://openweathermap.org/img/wn/" + this.info.weather[0].icon + "@2x.png"}
        //     else "" 
        }
    },
    
}
</script>
<style>
body
{
    background-image: url("../assets/weather.jpg");
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
}
div
{
    text-align: center;
}
h1
{
    font-size: 4em;
    color:tomato;
}
h2
{
    font-size: 3em;
}
h3
{
    font-size: 2em;
}
img
{
    width: 15vw;
}
</style>