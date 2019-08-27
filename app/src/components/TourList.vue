<template>
  <div>
    <h2 class="my-2 text-lg font-light text-center">Planned Tours</h2>
    <LocationFilter @applyFilter="applyFilter" />
    <ul>
      <TourCard v-for="(tour, index) in tours" :key="index" :tour="tour" />
    </ul>
  </div>
</template>

<script>
import { db } from "@/config/db";
import LocationFilter from "./LocationFilter.vue";
import TourCard from "./TourCard.vue";

// TODO: verify this is timezone safe
const plannedTours = db.collection("tours").where("plannedOn", ">", new Date());

export default {
  components: {
    LocationFilter,
    TourCard
  },
  data: function() {
    return {
      tours: [],
      filter: {}
    };
  },

  watch: {
    // TODO: there must be a better way to compose query objects...
    filter(f) {
      const queryScenario = Object.keys(f).length;
      switch (queryScenario) {
        // country
        case 1:
          this.$bind("tours", plannedTours.where("country", "==", f.country));
          break;
        // country + state
        case 2:
          this.$bind(
            "tours",
            plannedTours
              .where("country", "==", f.country)
              .where("state", "==", f.state)
          );
          break;
        // country + state = region
        case 3:
          this.$bind(
            "tours",
            plannedTours
              .where("country", "==", f.country)
              .where("state", "==", f.state)
              .where("region", "==", f.region)
          );
          break;
        default:
          this.$bind("tours", plannedTours.limit(20));
          break;
      }
    }
  },

  methods: {
    applyFilter(filter) {
      this.filter = filter;
    }
  },

  firestore() {
    return {
      tours: plannedTours.limit(20)
    };
  }
};
</script>
