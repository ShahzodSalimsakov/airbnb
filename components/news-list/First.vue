<template>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div
        v-for="list in newsList"
        :key="list.id"
        :class="[list.id === 0 ? 'p-4 md:w-3/3 w-full' : 'p-4 md:w-1/3 flex']"
      >
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <nuxt-link :to="list.url">
            <img
              class="lg:h-64 md:h-36 w-full object-cover object-center"
              :src="list.src"
              alt="blog"
            />
          </nuxt-link>
          <div class="p-6">
            <nuxt-link :to="list.url">
              <h1 class="title-font text-lg font-medium text-black mb-3">
                {{ list.name }}
              </h1>
            </nuxt-link>
            <p class="leading-relaxed mb-3 text-gray-600">
              {{ list.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'first',
  props: ['newsList'],
  data() {
    return {}
  }
}
</script>

<style scoped></style>
