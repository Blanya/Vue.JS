<template>
  <div class="pomo">
  <p>25:00</p>
  <button @click="startTimer">Start</button>
  </div>
</template>

<script>
import { setInterval } from 'timers';
// @ is an alias to /src


export default {
  name: 'pomodoro',
  data: function(){ return{
    count: 1500,
  }},
  components: {
  },
  methods:{
    startTimer: function()
    {
      setInterval()
    }
  }
}
</script>
