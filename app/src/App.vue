<template>
  <div id="app" class="font-sans p-4 lg:mx-auto lg:w-1/2">
    <h1 class="text-xl font-semibold text-center">Backcountry Buddy</h1>
    <TourList />
  </div>
</template>

<script>
import TourList from "./components/TourList.vue";

export default {
  name: "app",
  components: {
    TourList
  }
};
</script>
