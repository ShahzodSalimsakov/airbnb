<template>
  <v-carousel cycle :height="height" show-arrows-on-hover hide-delimiters>
    <div v-for="item in items" :key="item.id">
      <v-carousel-item>
        <v-row class="fill-height ml-0" align="center" justify="center">
          <nuxt-link :to="'/news/' + item.id">
            <div
              class="lg:max-w-2xl lg:w-full md:w-2/3 w-5/6 mb-10 pl-3 md:mb-0"
            >
              <img
                :alt="item.name"
                class="object-cover object-center rounded"
                :src="`${apiDomain}/${item.preview_photo}`"
              />
            </div>
          </nuxt-link>
          <div
            class="lg:flex-grow md:w-1/3 sm:px-5 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
          >
            <nuxt-link :to="'/news/' + item.id">
              <h1
                class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
              >
                {{ item.name }}
              </h1>
            </nuxt-link>
            <p class="mb-8 leading-relaxed">
              {{ item.preview_text }}
            </p>
            <p class="font-bold">
              {{ $dateFns.format(new Date(+item.created_date), 'dd.MM.yyyy') }}
            </p>
          </div>
        </v-row>
      </v-carousel-item>
    </div>
  </v-carousel>
</template>

<script>
require('dotenv').config()
export default {
  name: 'news-carousel',
  props: ['items', 'height', 'hide-delimiters'],
  data() {
    return {
      apiDomain: process.env.apiDomain,
      url: 'news'
    }
  },
  methods: {
    async getAllTemplates() {
      const { data } = await this.$axios.get(
        `/api/${this.url}?filter[0][key]=_id&filter[0][value]=${this.$route.params.id}`
      )
      this.news = data.data
    }
  },
  async mounted() {
    await this.getAllTemplates()
  }
}
</script>

<style scoped></style>
