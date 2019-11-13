<template>
  <div id="app">
    <!-- <Bitcoin></Bitcoin> -->
    <WeatherFive></WeatherFive>
  </div>
</template>

<script>

// import Bitcoin from './components/Bitcoin.vue'
import WeatherFive from './components/WeatherFive'

export default {
  name: 'app',
  components: {
    // Bitcoin
    WeatherFive
  }
}
</script>