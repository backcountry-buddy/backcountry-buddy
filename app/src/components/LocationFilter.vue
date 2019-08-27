<template>
  <div class="border p-2 my-4">
    <h3 class="mb-2 italic font-light text-sm">
      Filter planned tours by location
    </h3>
    <div class="flex justify-between items-center">
      <div>
        <select
          v-model="appliedFilter.country"
          @change="updateFilter('country')"
          class="bg-gray-200 text-sm"
        >
          <option disabled value>Select a country</option>
          <option
            v-for="(states, country, index) in countries"
            v-bind:key="index"
            >{{ country }}</option
          >
        </select>
        <select
          v-if="!!appliedFilter.country"
          v-model="appliedFilter.state"
          @change="updateFilter('state')"
          class="ml-2 bg-gray-200 text-sm"
        >
          <option disabled value>Select a state</option>
          <option
            v-for="(regions, state, index) in states"
            v-bind:key="index"
            >{{ state }}</option
          >
        </select>
        <select
          v-if="!!appliedFilter.state"
          v-model="appliedFilter.region"
          @change="updateFilter('region')"
          class="ml-2 bg-gray-200 text-sm"
        >
          <option disabled value>Select a region</option>
          <option
            v-for="(locactions, region, index) in regions"
            v-bind:key="index"
            >{{ region }}</option
          >
        </select>
      </div>
      <button
        type="button"
        class="text-xs bg-gray-200 px-1 border"
        @click="resetFilter"
      >
        reset filter
      </button>
    </div>
  </div>
</template>

<script>
import { db } from "@/config/db";

export default {
  data: function() {
    return {
      filterConfig: {},
      appliedFilter: {
        country: "United States",
        state: "",
        region: ""
      }
    };
  },

  computed: {
    countries() {
      return this.filterConfig;
    },
    states() {
      return this.filterConfig[this.appliedFilter.country];
    },
    regions() {
      return this.filterConfig[this.appliedFilter.country][
        this.appliedFilter.state
      ];
    }
  },

  methods: {
    updateFilter(locationType) {
      if (locationType === "country") {
        this.appliedFilter.state = "";
        this.appliedFilter.region = "";
      }
      if (locationType === "state") {
        this.appliedFilter.region = "";
      }
      const cleanFilter = this.cleanFilter(this.appliedFilter);
      this.$emit("applyFilter", cleanFilter);
    },
    cleanFilter(filter) {
      // remove empty filter params
      return Object.keys(filter).reduce((cleaned, filterParam) => {
        if (filter[filterParam]) {
          cleaned[filterParam] = filter[filterParam];
        }
        return cleaned;
      }, {});
    },
    resetFilter() {
      this.appliedFilter = {
        country: "",
        state: "",
        region: ""
      };
      const cleanFilter = this.cleanFilter(this.appliedFilter);
      this.$emit("applyFilter", cleanFilter);
    }
  },

  firestore: {
    filterConfig: db.collection("configs").doc("locationFilter")
  }
};
</script>
