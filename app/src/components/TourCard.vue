<template>
  <li class="border border-blue-200 bg-blue-100 p-2">
    <h4 class="flex justify-between">
      <div>
        <span class="font-semibold">{{ tour.location }}</span>
        <span class="ml-1 text-xs font-light">{{ tourDate }}</span>
      </div>
      <div class="font-light text-sm">{{ tour.state }}, {{ tour.country }}</div>
    </h4>
    <p class="pl-2 text-sm">{{ tour.description }}</p>
  </li>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: { tour: Object },
  data: function() {
    return {
      tours: null
    };
  },
  computed: {
    tourDate() {
      const d = DateTime.fromSeconds(this.tour.plannedOn.seconds, {
        zone: "utc"
      });
      return d.toLocaleString(DateTime.DATE_MED);
    }
  }
};
</script>
