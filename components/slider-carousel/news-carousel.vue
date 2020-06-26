<template>
  <v-carousel cycle :height="height" show-arrows-on-hover hide-delimiters>
    <div v-for="item in items" :key="item.id">
      <v-carousel-item v-if="item.slider">
        <v-row class="fill-height ml-0" align="center" justify="center">
          <nuxt-link v-if="item.link" :to="item.link">
            <div
              class="lg:max-w-2xl lg:w-full md:w-2/3 w-5/6 mb-10 pl-3 md:mb-0"
            >
              <img
                :alt="item.name"
                class="object-cover object-center rounded"
                :src="item.src"
              />
            </div>
          </nuxt-link>
          <div
            v-if="!item.link"
            class="lg:max-w-2xl lg:w-full md:w-2/3 w-5/6 mb-10 pl-3 md:mb-0"
          >
            <img
              :alt="item.name"
              class="object-cover object-center rounded"
              :src="item.src"
            />
          </div>
          <div
            class="lg:flex-grow md:w-1/3 sm:px-5 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
          >
            <nuxt-link v-if="item.link" :to="item.link">
              <h1
                class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
              >
                {{ item.name }}
              </h1>
            </nuxt-link>
            <h1
              v-if="!item.link"
              class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
            >
              {{ item.name }}
            </h1>
            <p class="mb-8 leading-relaxed">
              {{ item.title }}
            </p>
            <p v-if="item.date" class="font-bold">
              {{ item.date.toDateString() }}
            </p>
          </div>
        </v-row>
      </v-carousel-item>
    </div>
  </v-carousel>
</template>

<script>
export default {
  name: 'news-carousel',
  props: ['items', 'height', 'hide-delimiters']
}
</script>

<style scoped></style>
