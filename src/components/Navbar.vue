<template>
  <nav
    class="px-2 bg-black/80 sm:px-4 py-3.5 fixed w-full z-20 top-0 left-0"
    :class="{ 'sm:bg-transparent sm:shadow-none': !showWhiteBg }"
  >
    <div
      class="container-nav flex flex-wrap items-center justify-between mx-auto"
    >
      <span
        class="self-center text-xl font-semibold whitespace-nowrap text-white-smoke"
        >MonSpark</span
      >
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white-smoke bg-blue-700 font-medium rounded-full hidden lg:flex text-sm px-5 py-2 text-center mr-3 md:mr-0"
        >
          Login
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              aria-current="page"
              >Features</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Pricing</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Integrations</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Blogs</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Company</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Contact</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white-smoke md:p-0"
              >Community</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let showWhiteBg = ref(false);
    document.addEventListener("scroll", function () {
      let bodyTopPositon = document.body.getBoundingClientRect().top;
      if (bodyTopPositon < -158) {
        showWhiteBg.value = true;
      } else {
        showWhiteBg.value = false;
      }
    });
    return {
      showWhiteBg,
    };
  },
};
</script>
<style></style>
