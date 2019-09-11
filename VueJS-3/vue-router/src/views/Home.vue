<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="title"/>
    
    <card cardTitle="hello" @sendTitle="receiveCardTitle"></card>
    <card cardTitle="my" @sendTitle="receiveCardTitle"></card>
    <card cardTitle="dear" @sendTitle="receiveCardTitle"></card>
    {{count}} <button @click="startTimer">Démarrer mon compteur</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '../components/Card'
import { setInterval } from 'timers';

export default {
  name: 'home',
  data: function()
  { return{ 
    title:'',
    count: 0,
    interval: null,
  }
  },
  components: {
    HelloWorld,
    Card
  },
  methods: {
  receiveCardTitle: function(cardTitle)

    {
      this.title = cardTitle;
    },
  increaseTimer: function()
  {
    this.count++;
  },
  startTimer: function()
  {
    this.count=0;
    clearInterval(this.interval);
    this.interval= setInterval(this.increaseTimer,1000);
  }

  }
}
</script>
