<template>
  <div>
    <h2>Tours</h2>
    <ul>
      <li v-for="(tour, index) in tours"  v-bind:key="index">
        {{tour.description}}
      </li>
    </ul>

  </div>
</template>

<script>
import { db } from '@/config/db'
export default {
  data: function () {
    return {
       tours: [],
    }
  },

  firestore: {
    tours: db.collection('tours'),
  },
}
</script>

<style scoped>
</style>