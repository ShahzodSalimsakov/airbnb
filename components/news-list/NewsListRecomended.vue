<template>
  <section class="news-list-recomended text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="p-4 md:w-1/3 md:mb-0 mb-6 flex"
        >
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="24px" class="text-black">mdi-{{ icon }}</v-icon>
          </div>
          <div class="flex-grow pl-2">
            <nuxt-link :to="item.link">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                {{ item.name }}
              </h2>
            </nuxt-link>
            <p class="leading-relaxed text-base">
              {{ item.title }}
            </p>
            <nuxt-link
              :to="item.link"
              class="mt-3 text-indigo-500 inline-flex items-center"
              >Подробнее
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'recomended',
  props: ['items', 'icon']
}
</script>

<style scoped></style>
