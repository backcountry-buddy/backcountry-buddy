<template>
  <div>
    <!-- TODO: improve UX -->
    <h3>Filter by location</h3>
    <div>Selected: {{appliedFilter.country}} {{appliedFilter.state}} {{appliedFilter.region}}</div>
    <ul>
      <li v-for="(states, country, index) in countries"  v-bind:key="index">
        <a @click="updateFilter('country', country)" class="cursor-pointer text-blue-500">{{country}}</a>
      </li>
      <li v-if="!!appliedFilter.country">
        <ul>
          <li v-for="(regions, state, index) in states" v-bind:key="index">
            <a @click="updateFilter('state', state)" class="cursor-pointer text-blue-500">{{state}}</a>
          </li>
        </ul>
      </li>
      <li v-if="(!!appliedFilter.country && !!appliedFilter.state)">
        <ul>
          <li v-for="(locations, region, index) in regions" v-bind:key="index">
            <a @click="updateFilter('region', region)" class="cursor-pointer text-blue-500">{{region}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '@/config/db';

export default {
  data: function () {
    return {
       filterConfig: {},
       appliedFilter: {}
    }
  },

  computed: {
    countries() {
      return this.filterConfig;
    },
    states() {
      return this.filterConfig[this.appliedFilter.country];
    },
    regions() {
      return this.filterConfig[this.appliedFilter.country][this.appliedFilter.state];
    }
  },

  methods: {
    updateFilter(k,v) {
      const appliedFilter = Object.assign({}, this.appliedFilter)
      appliedFilter[k] = v;
      if (k === 'country') {
        delete appliedFilter.state;
        delete appliedFilter.region;
      }
      if (k === 'state') {
        delete appliedFilter.region;
      }
      this.appliedFilter = appliedFilter;
      this.$emit('applyFilter', appliedFilter)
    }
  },

  firestore: {
    filterConfig: db.collection('configs').doc('locationFilter'),
  }
}
</script>