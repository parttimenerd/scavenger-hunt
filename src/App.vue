<script setup>
import * as Vue from "vue";
import { RouterLink, RouterView } from "vue-router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

</script>

<template>
<RouterView />
</template>


<style>
body {
  margin: 0;
  min-height: 100vh;
  padding: 5rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  max-width: calc(min(600px, 100vw));
  width: 600px;
  padding: 0 1rem;
}
</style>