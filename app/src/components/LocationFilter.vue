<template>
  <div>
    <!-- TODO: style better -->
    <h3>Filter by location</h3>

    <div>Selected: {{selectedCountry}} {{selectedState}}</div>
    <ul>
      <li v-for="(states, country, index) in countries"  v-bind:key="index">
        <a @click="selectCountry(country)" >{{country}}</a>
      </li>
      <li v-if="!!selectedCountry">
        <ul>
          <li v-for="(regions, state, index) in states" v-bind:key="index">
            <a @click="selectState(state)">{{state}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/config/db'
export default {
  data: function () {
    return {
       filter: {},
       selectedCountry: null,
       selectedState: null,
    }
  },

  computed: {
    countries() {
      return this.filter;
    },
    states() {
      return this.filter[this.selectedCountry];
    }
  },

  // TODO: consolidate
  methods: {
    selectCountry(country) {
      this.selectedCountry = country;
      this.$emit('setFilter', 'country', country)
    },
    selectState(state) {
      this.selectedState = state;
      this.$emit('setFilter', 'state', state)
    },

  },

  firestore: {
    filter: db.collection('configs').doc('locationFilter'),
  },
}
</script>