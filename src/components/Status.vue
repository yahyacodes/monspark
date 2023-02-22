<template>
  <section class="status-bg py-40">
    <div class="container">
      <!--  -->
      <div class="-mt-28 text-center">
        <div class="flex flex-wrap -mx-10">
          <div class="w-full md:w-1/3 lg:w-1/3 px-3">
            <h1 class="uppercase text-xs text-white mt-5">status pages</h1>
          </div>
          <div class="w-full md:w-1/3 lg:w-1/3 px-3 -mx-40 mt-1">
            <hr class="my-6 w-96 border-gray-700" />
          </div>
        </div>
      </div>
      <!--  -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <img
          src="../assets/monspark-status.png"
          alt=""
          class="mb-3 h-28 w-28 mx-14 -mt-5"
        />
        <div class="-mx-96">
          <h1 class="mb-3 text-white text-5xl font-bold">
            Ensure Trust and Minimize <br />
            Confussion with
            <span class="text-purple-600">Status Pages</span>
          </h1>
          <p class="text-gray-400 text-xl mt-5">
            Keep your customers informed with customizable status pages hosted
            on <br />
            your own domain, providing real-time updates on incidents, outages
            and <br />
            status of your services.
          </p>
        </div>
      </div>
      <!--  -->

      <div class="bg-black/20 shadow rounded mx-auto w-full mt-20 p-8">
        <div class="flex items-center mb-2 mt-5">
          <img class="h-16 w-16" src="../assets/monspark-logo.png" alt="" />
          <h1 class="text-5xl text-white mx-2 -mt-4">|</h1>
          <div class="pl-4">
            <h1 class="text-3xl font-bold text-gray-100 -mx-5">
              MonSpark Service Status
            </h1>
          </div>
        </div>

        <div class="bg-black/40 shadow rounded mx-auto max-w-xl">
          <div class="flex flex-wrap mt-28">
            <div class="w-full md:w-1/2 lg:w-1/2 px-3">
              <p class="text-white font-bold text-base mt-2 mb-2">
                <fa icon="circle-check" class="text-green-400 rounded-full" />
                All Systems operational
              </p>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 px-3">
              <p class="text-white text-sm mt-2 mb-2">Last Update 12:42:28</p>
            </div>
          </div>
        </div>

        <div class="bg-black/40 shadow rounded mx-auto max-w-xl mt-10">
          <h1 class="text-white font-bold mx-5">Application</h1>
          <div class="bg-gray-900 rounded mx-auto">
            <div class="flex flex-wrap mt-4">
              <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                <p class="text-white font-bold text-base mt-2 mb-2">
                  Application
                  <span class="font-normal">https://app.monspark.com</span>
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                <p class="font-bold text-base mt-2 mb-2 text-green-400">
                  Operational
                  <fa icon="circle-check" class="rounded-full" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-black/40 shadow rounded mx-auto max-w-xl mt-10">
          <h1 class="text-white font-bold mx-5">Website</h1>
          <div class="bg-gray-900 rounded mx-auto">
            <div class="flex flex-wrap mt-4">
              <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                <p class="text-white font-bold text-base mt-2 mb-2">
                  Website <br />
                  <span class="font-normal">https://monspark.com</span>
                </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/2 px-3">
                <p class="font-bold text-base mt-2 mb-2 text-green-400">
                  Operational
                  <fa icon="circle-check" class="rounded-full" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
