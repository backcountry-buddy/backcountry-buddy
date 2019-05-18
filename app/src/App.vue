<template>
  <div id="app">
    <h1>Backcountry Buddy</h1>
    <Tours/>
  </div>
</template>

<script>
import Tours from './components/Tours.vue'

export default {
  name: 'app',
  components: { 
    Tours
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
