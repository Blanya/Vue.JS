<template>
  <div class="pomo">
  <!-- <p>{{count}}</p> -->
  <p class="count"> {{minutes}} : {{seconds }} </p>
  <button @click="startTimer">Start</button>
  <button @click="stopTimer">Stop</button>
  <button @click="breakTimer">Pause</button>
  <button @click="restartTimer">Reprendre</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'pomodoro',
  data: function(){ return{
    count: 1500,
    interval: null,
    state: true,
  }},
  methods:{
  increaseTimer: function()
  {
    this.count--;
  },
  startTimer: function()
  {
    clearInterval(this.interval),
    this.count=1500,
    this.interval= setInterval(this.increaseTimer,1000)
  },
  stopTimer:function()
  {
    clearInterval(this.interval),
    this.count= 1500;
  },
  breakTimer: function()
  {
    clearInterval(this.interval),
    this.count=this.count;
  },
  restartTimer:function()
  {
    this.count=this.count;
    this.interval= setInterval(this.increaseTimer,1000)
  },
  padTime: function(time){
      return (time < 10 ? '0' : '') + time;
    },
  breakTime: function()
  {
    if(this.count=0)
    {
      this.state=false;
      return this.count=300;
    }
    else
    {this.count=1500}
  }
  },
  computed: {
    minutes: function(){
      const minutes = Math.floor(this.count / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.count - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
}
</script>

<style scoped>
.pomo
{
  background-color: tomato;
  height: 45vh;
  padding-top: 10vh;
  font-size: 5em;
}
button
{
  background-color: black;
  color: white;
  border: none;
  margin: 1em;
  width: 7vw;
  height: 5vh;
}
.count
{
  border: 3px black solid;
  margin: 0 auto;
  width: 15vw;
  border-radius: 20px;
}
</style>
