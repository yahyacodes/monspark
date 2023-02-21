<template>
  <Hero />
  <Features />
  <AllFeatures />
  <Status />
</template>

<script>
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import AllFeatures from "./components/AllFeatures.vue";
import Status from "./components/Status.vue";
export default {
  name: "App",
  components: {
    Hero,
    Features,
    AllFeatures,
    Status,
  },
};
</script>

<style></style>
