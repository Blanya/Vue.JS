<template>
    <div class="weather">
        <div class="header"><h1>Météo des jours à venir</h1></div>
        
        <div class="infos" v-if="info">
        <i class="fas fa-cloud-sun"></i>
        <h2>{{info.city.name}}, FR</h2>
        <table>
            <tr>
                <td>Date</td>
                <td>{{info.list[0].dt_txt}}</td>
                <td>{{info.list[7].dt_txt}}</td>
                <td>{{info.list[15].dt_txt}}</td>
                <td>{{info.list[23].dt_txt}}</td>
                <td>{{info.list[31].dt_txt}}</td>
                <td>{{info.list[39].dt_txt}}</td>
            </tr><tr>
                <td>Temps</td>
                <td>{{info.list[0].weather[0].description}}
                    <img :src="img1" alt="weather"/>
                </td>
                <td>{{info.list[7].weather[0].description}}
                    <img :src="img2" alt="weather"/>
                </td>
                <td>{{info.list[15].weather[0].description}}
                    <img :src="img3" alt="weather"/>
                </td>
                <td>{{info.list[23].weather[0].description}}
                    <img :src="img4" alt="weather"/>
                </td>
                <td>{{info.list[31].weather[0].description}}
                    <img :src="img5" alt="weather"/>
                </td>
                <td>{{info.list[39].weather[0].description}}
                    <img :src="img6" alt="weather"/>
                </td>
            </tr>
            <tr>
                <td>Température</td>
                <td>{{info.list[0].main.temp}}</td>
                <td>{{info.list[7].main.temp}}</td>
                <td>{{info.list[15].main.temp}}</td>
                <td>{{info.list[23].main.temp}}</td>
                <td>{{info.list[31].main.temp}}</td>
                <td>{{info.list[39].main.temp}}</td>
            </tr>
            
        </table>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name:"WeatherFive",
    data: function(){
        return{
            info: null,
        }
    },
    methods: {
        getDate: function()
        {
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast?q=Lens&units=metric&lang=fr&APPID=8fe18096708806fa2443917d7258a9d5")
                .then(response =>(this.info= response.data))
        },
        
    },
    created(){
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast?q=Lens&units=metric&lang=fr&APPID=8fe18096708806fa2443917d7258a9d5")
                .then(response =>(this.info= response.data))
                console.log(this.info)
    },
    computed: {
        img1: function() {return this.info ? "https://openweathermap.org/img/wn/" + this.info.list[0].weather[0].icon + "@2x.png" :""},
        img2: function() {return this.info ? "https://openweathermap.org/img/wn/" + this.info.list[7].weather[0].icon + "@2x.png" :""},
        img3: function() {return this.info ? "https://openweathermap.org/img/wn/" + this.info.list[15].weather[0].icon + "@2x.png" :""},
        img4: function() {return this.info ?  "https://openweathermap.org/img/wn/" + this.info.list[23].weather[0].icon + "@2x.png" :""},
        img5: function() {return this.info ?  "https://openweathermap.org/img/wn/" + this.info.list[31].weather[0].icon + "@2x.png" :""},
        img6: function() {return this.info ?  "https://openweathermap.org/img/wn/" + this.info.list[39].weather[0].icon + "@2x.png" : ""},


        // img: function(){
        //     if (this.info)
        //     {"https://openweathermap.org/img/wn/" + this.info.weather[0].icon + "@2x.png"}
        //     else "" 
        }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Dosisx&display=swap');
body
{
    background-image: url("../assets/sun.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 1.1em;
    font-family: 'Dosis', sans-serif
}
div
{
    text-align: center;
}
h1
{
    font-size: 4em;
    margin-top: 2.5em;
    font-weight: 500;
}
h2
{
    font-size: 3em;
    font-weight: 400;
}
table, tr
{
    border: 3px solid black;
    border-collapse: collapse;
    text-align: center;
}
img
{
    width: 10vw;
}
.header
{
    height: 22vh;
}
</style>