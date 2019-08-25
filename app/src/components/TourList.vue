<template>
  <div>
    <h2 class="text-lg font-semibold">Planned Tours</h2>

    <LocationFilter @applyFilter="applyFilter" />

    <!-- TODO: improve list view -->
    <ul>
      <li v-for="(tour, index) in tours"  v-bind:key="index">
        {{tour.description}}
      </li>
    </ul>

  </div>
</template>

<script>
import { db } from '@/config/db'
import LocationFilter from './LocationFilter.vue';

const plannedTours = db.collection('tours')
  .where('plannedOn','>',new Date())

export default {
  data: function () {
    return {
       tours: [],
       filter: {}
    }
  },

  components: {
    LocationFilter
  },

  methods: {
    applyFilter(filter) {
      this.filter = filter;
    }
  },

  firestore() {
    return {
      tours: plannedTours.limit(20)
    }
  },

  watch: {
    // there must be a better way to compose query objects...
    filter(f) {
      const queryScenario = Object.keys(f).length;
      switch (queryScenario) {
        // country
        case 1:
          this.$bind('tours', plannedTours
            .where('country', '==', f.country));
          break;
        // country + state
        case 2:
          this.$bind('tours', plannedTours
            .where('country', '==', f.country)
            .where('state', '==', f.state));
          break;
        // country + state = region
        case 3:
          this.$bind('tours', plannedTours
            .where('country', '==', f.country)
            .where('state', '==', f.state)
            .where('region', '==', f.region));
          break;
        default:
          this.$bind('tours', plannedTours.limit(20))
          break;
      }
    }
  }
}
</script>

<style scoped>
</style>