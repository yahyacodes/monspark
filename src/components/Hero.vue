<template>
  <section class="hero-bg py-52">
    <div>
      <Navbar />
    </div>

    <div class="container text-center">
      <h1 class="header-tag text-white-smoke leading-none -mt-20">
        Focus on your app, leave monitoring to
        <span class="text-regal-blue">Monspark</span>
      </h1>
      <img
        src="../assets/monspark-users-croped.png"
        alt=""
        class="w-40 mx-auto mt-10"
      />
      <p class="text-white-smoke mx-auto font-semibold text-base mt-4">
        Loved by teams from 110+ countries
      </p>
      <button
        type="button"
        class="text-white bg-blue-700 font-medium rounded-full text-sm px-5 py-2 text-center mx-auto mt-10"
      >
        Sign up for free
      </button>
      <p class="text-gray-400 font-semibold mx-auto text-xs mt-4">
        OR SIGN IN WITH:
      </p>
      <img
        src="../assets/google-icon.svg"
        alt=""
        class="w-8 h-8 mx-auto mt-4"
      />

      <div
        class="mt-10 border border-white-smoke rounded-full w-6 h-10 mx-auto"
      >
        <p class="text-white-smoke font-bold text-xs animate-bounce">.</p>
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style></style>
