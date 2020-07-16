<template>
  <section class="text-gray-700 body-font">
    <div class="mx-auto flex pb-8 md:flex-row flex-col items-center">
      <news-carousel :items="news" :height="newsHeight" />
    </div>

    <v-divider light class="pb-12"></v-divider>

    <div class="text-3xl pb-6 font-bold px-4">{{ $t('latestNews') }}</div>

    <div class="pb-12 mx-auto">
      <div class="flex flex-wrap text-center">
        <div
          v-for="newsElement in sortLatestNews"
          :key="newsElement.id"
          class="sm:w-1/2"
        >
          <div class="mb-10 px-4 text-left">
            <nuxt-link :to="'/news/' + newsElement.id">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  :alt="newsElement.name"
                  class="object-cover object-center h-full w-full"
                  :src="`${apiDomain}/${newsElement.preview_photo}`"
                  style="max-height: 400px;"
                />
              </div>
            </nuxt-link>
            <nuxt-link :to="'/news/' + newsElement.id">
              <h2 class="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">
                {{ newsElement.name }}
              </h2>
            </nuxt-link>
            <p class="leading-relaxed text-base">
              {{ newsElement.preview_text }}
            </p>
            <p class="font-bold text-left">
              {{
                $dateFns.format(
                  new Date(+newsElement.created_date),
                  'dd.MM.yyyy'
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <v-divider light class="pb-12"></v-divider>

    <div>
      <v-tabs v-model="tab" align-with-title class="top-0 pb-12">
        <v-tabs-slider color="primary"></v-tabs-slider>

        <v-tab
          v-for="category in categoriesNews"
          :key="category.code"
          class="font-bold"
          @click="catFilter = category.code"
        >
          {{ category.name }}
        </v-tab>
      </v-tabs>

      <div class="flex flex-wrap text-center">
        <div
          v-for="newsElement in filteredNews"
          :key="newsElement.id"
          class="flex sm:w-1/2 float-left"
        >
          <div class="mb-10 px-4">
            <nuxt-link :to="'/news/' + newsElement.id">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  :alt="newsElement.name"
                  class="object-cover object-center h-full w-full"
                  :src="`${apiDomain}/${newsElement.preview_photo}`"
                  style="max-height: 400px;"
                />
              </div>
            </nuxt-link>
            <nuxt-link :to="'/news/' + newsElement.id">
              <h2
                class="title-font text-2xl font-bold text-left text-gray-900 mt-6 mb-3"
              >
                {{ newsElement.name }}
              </h2>
            </nuxt-link>
            <p class="text-left leading-relaxed text-base">
              {{ newsElement.preview_text }}
            </p>
            <p class="font-bold text-left">
              {{
                $dateFns.format(
                  new Date(+newsElement.created_date),
                  'dd.MM.yyyy'
                )
              }}
            </p>
          </div>
        </div>
        <v-btn v-if="news.length > more" @click="more += 2">Ёще </v-btn>
      </div>
    </div>
  </section>
</template>

<script>
import NewsCarousel from '~/components/slider-carousel/news-carousel'
require('dotenv').config()
export default {
  name: 'index',
  components: { NewsCarousel },
  data() {
    return {
      apiDomain: process.env.apiDomain,
      url: 'news',
      tab: null,
      catFilter: '',
      more: 4,
      categoriesNews: [
        { name: 'All', code: '' },
        { name: 'Day', code: 'day' },
        { name: 'Week', code: 'week' },
        { name: 'Month', code: 'month' }
      ],
      newsHeight: 500,
      news: []
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
  },
  computed: {
    filteredNews() {
      const news = [...this.news]
      if (this.catFilter) {
        return news.filter((item) => item.category === this.catFilter)
      } else {
        return news
          .sort((a, b) => a.date - b.date)
          .reverse()
          .slice(0, this.more)
      }
    },
    sortLatestNews() {
      const news = [...this.news]
      return news
        .sort((a, b) => a.date - b.date)
        .reverse()
        .slice(0, 2)
    }
  },
  updated() {}
}
</script>

<style scoped></style>
