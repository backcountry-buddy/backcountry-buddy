<template>
  <div>
    <h2>Tours</h2>

    <LocationFilter @setFilter="setFilter"  />

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
    setFilter(k,v) {
      if (this.filter[k] === v) {
        // filter is unchanged
        return;
      }
      const filter = Object.assign({}, this.filter)
      filter[k] = v;
      if (k === 'country') {
        delete filter.state;
        delete filter.region;
      }
      if (k === 'state') {
        delete filter.region;
      }
      this.filter = filter;
    }
  },
  firestore() {
    return {
      // TODO: paginate
      tours: plannedTours.limit(20)
    }
  },
  watch: {
    filter(f) {
      const queryScenario = Object.keys(f).length;
      switch (queryScenario) {
        // country
        case 1:
          this.$bind('tours', plannedTours
            .where('country', '==', f.country));
          break;
        // country + tate
        case 2:
          this.$bind('tours', plannedTours
            .where('country', '==', f.country)
            .where('state', '==', f.state));
          break;
        // country + tate = region
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