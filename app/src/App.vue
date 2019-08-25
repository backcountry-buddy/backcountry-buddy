<template>
  <div id="app">
    <h1>Backcountry Buddy</h1>
    <TourList/>
  </div>
</template>

<script>
import TourList from './components/TourList.vue';

export default {
  name: 'app',
  components: { 
    TourList
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
