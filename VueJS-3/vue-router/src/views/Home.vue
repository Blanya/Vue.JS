<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="title"/>
    
    <card cardTitle="hello" @sendTitle="receiveCardTitle"></card>
    <card cardTitle="my" @sendTitle="receiveCardTitle"></card>
    <card cardTitle="dear" @sendTitle="receiveCardTitle"></card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '../components/Card'

export default {
  name: 'home',
  data: function()
  { return{ 
    title:''
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

    }

  }
}
</script>
