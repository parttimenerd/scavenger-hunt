<script setup>
import mapboxgl from "mapbox-gl";
import { ref, computed, onUnmounted } from "vue";
const props = defineProps({
  locationName: {
    type: String,
    required: true,
  },
  location: {
    type: Array,
    required: true,
  },
});

mapboxgl.accessToken =
  "pk.eyJ1IjoicGFydHRpbWVuZXJkIiwiYSI6ImNsOTFlYTF0aTBrdzAzcHFocmpibGhjZTYifQ.pCcqWk4uV4bX3nJOmiQBAA";

const arrived = ref(false);
let map;

const mapContainer = computed({
  get: () => {},
  set: (element) => {
    if (element && !map) {
      map = new mapboxgl.Map({
        container: element,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [8.40402, 49.00948],
        zoom: 13,
      });
      const marker1 = new mapboxgl.Marker()
        .setLngLat(props.location)
        .addTo(map);
      const geo = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      });
      // Add geolocate control to the map.
      map.addControl(geo);

      map.on("load", () => geo.trigger());
    }
  },
});

onUnmounted(() => {
  map.remove();
});

const state = ref("find");
</script>

<template>
  <div v-if="!arrived">
    <h2>Gehe zur nächsten Frage</h2>
    <p>
      <slot name="location"></slot>
      <details>
        <summary class="btn btn-secondary">Tipp</summary>
        {{ locationName }}
      </details>
    </p>

    <div class="mb-3">
      <div ref="mapContainer" class="map-container" />
    </div>
    <div class="d-flex">
      <button
        type="button"
        class="btn btn-primary flex-fill"
        @click="() => (arrived = true)"
      >
        Bin dort
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<style scoped>
.map-container {
  min-height: 400px;
}
</style>
