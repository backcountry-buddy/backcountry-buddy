<template>
  <div id="app" class="p-4">
    <h1 class="text-xl font-bold">Backcountry Buddy</h1>
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
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
