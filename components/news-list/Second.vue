<template>
  <section class="second-news text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div
          v-for="list in newsList"
          :key="list.id"
          class="p-4 md:w-1/3 sm:mb-0 mb-6 mt-10"
        >
          <span v-if="list.icon">
            <v-icon>mdi-{{ list.icon }}</v-icon>
          </span>
          <div v-if="list.photo" class="rounded-lg h-40 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center w-1/4 sm:w-1/4 md:w-2/4 lg:w-2/5"
              :src="`${apiDomain}/${list.photo}`"
            />
          </div>
          <h2 class="text-2xl font-black title-font text-gray-900 mt-5 mb-7">
            {{ list.name }}
          </h2>
          <p class="text-base leading-relaxed mt-2">
            {{ list.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
require('dotenv').config()
export default {
  name: 'first',
  props: ['newsList'],
  data() {
    return {
      apiDomain: process.env.apiDomain
    }
  }
}
</script>

<style>
.second-news .v-icon.v-icon {
  font-size: 60px;
}
</style>
