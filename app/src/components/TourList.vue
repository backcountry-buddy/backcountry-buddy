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

const plannedTours = db.collection('tours')
  .where('plannedOn','>',new Date())

export default {
  data: function () {
    return {
       tours: [],
       filter: {}
    }
  },

  firestore() {
    return {
      // TODO: paginate
      tours: plannedTours.limit(20)
    }
  }
}
</script>

<style scoped>
</style>