<template>
  <Hero />
  <Features />
  <AllFeatures />
  <Status />
  <Testimonials />
  <Globe />
  <Integrations />
  <Start />
  <Footer />
</template>

<script>
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import AllFeatures from "./components/AllFeatures.vue";
import Status from "./components/Status.vue";
import Testimonials from "./components/Testimonials.vue";
import Globe from "./components/Globe.vue";
import Integrations from "./components/Integrations.vue";
import Start from "./components/Start.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Hero,
    Features,
    AllFeatures,
    Status,
    Testimonials,
    Globe,
    Integrations,
    Start,
    Footer,
  },
};
</script>

<style></style>
