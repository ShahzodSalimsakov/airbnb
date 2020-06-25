<template>
  <section class="text-gray-700 body-font">
    <div class="mx-auto flex pb-8 md:flex-row flex-col items-center">
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <div v-for="slide in news" :key="slide.id">
          <v-carousel-item v-if="slide.slider">
            <v-row class="fill-height ml-0" align="center" justify="center">
              <nuxt-link to="/">
                <div
                  class="lg:max-w-2xl lg:w-full md:w-2/3 w-5/6 mb-10 pl-3 md:mb-0"
                >
                  <img
                    :alt="slide.name"
                    class="object-cover object-center rounded"
                    :src="slide.src"
                  />
                </div>
              </nuxt-link>
              <div
                class="lg:flex-grow md:w-1/3 sm:px-5 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
              >
                <nuxt-link to="/">
                  <h1
                    class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"
                  >
                    {{ slide.name }}
                  </h1>
                </nuxt-link>
                <p class="mb-8 leading-relaxed">
                  {{ slide.title }}
                </p>
                <p class="font-bold">{{ slide.date.toDateString() }}</p>
              </div>
            </v-row>
          </v-carousel-item>
        </div>
      </v-carousel>
    </div>

    <v-divider light class="pb-12"></v-divider>

    <div class="text-3xl pb-6 font-bold px-4">Последние новости</div>

    <div class="pb-12 mx-auto">
      <div class="flex flex-wrap text-center">
        <div
          v-for="newsElement in sortLatestNews"
          :key="newsElement.id"
          class="sm:w-1/2"
        >
          <div class="mb-10 px-4 text-left">
            <nuxt-link to="/">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  :alt="newsElement.name"
                  class="object-cover object-center h-full w-full"
                  :src="newsElement.src"
                  style="max-height: 400px;"
                />
              </div>
            </nuxt-link>
            <nuxt-link to="/">
              <h2 class="title-font text-2xl font-bold text-gray-900 mt-6 mb-3">
                {{ newsElement.name }}
              </h2>
            </nuxt-link>
            <p class="leading-relaxed text-base">
              {{ newsElement.title }}
            </p>
            <p class="font-bold text-left">
              {{ newsElement.date.toDateString() }}
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
            <nuxt-link to="/">
              <div class="rounded-lg h-auto overflow-hidden">
                <img
                  :alt="newsElement.name"
                  class="object-cover object-center h-full w-full"
                  :src="newsElement.src"
                  style="max-height: 400px;"
                />
              </div>
            </nuxt-link>
            <nuxt-link to="/">
              <h2
                class="title-font text-2xl font-bold text-left text-gray-900 mt-6 mb-3"
              >
                {{ newsElement.name }}
              </h2>
            </nuxt-link>
            <p class="text-left leading-relaxed text-base">
              {{ newsElement.title }}
            </p>
            <p class="font-bold text-left">
              {{ newsElement.date.toDateString() }}
            </p>
          </div>
        </div>
        <v-btn v-if="news.length > more" @click="more += 2">Ёще</v-btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      tab: null,
      catFilter: '',
      more: 4,
      categoriesNews: [
        { name: 'All', code: '' },
        { name: 'Day', code: 'day' },
        { name: 'Week', code: 'week' },
        { name: 'Month', code: 'month' }
      ],
      news: [
        {
          id: 0,
          name: 'Measuring Discrimination on the Airbnb Platform',
          category: '',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-30'),
          src: 'https://dummyimage.com/875x650/0000/fff',
          slider: true
        },
        {
          id: 1,
          category: '',
          name: 'Measuring Discrimination on the Airbnb Platform',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.' +
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-15'),
          src: 'https://dummyimage.com/875x650/636363/0000',
          slider: true
        },
        {
          id: 2,
          category: 'day',
          name: 'Measuring Discrimination on the Airbnb Platform',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-20'),
          src: 'https://dummyimage.com/875x875/ff0000/0000',
          slider: false
        },
        {
          id: 3,
          category: 'week',
          name: 'Measuring Discrimination on the Airbnb Platform',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-28'),
          src: 'https://dummyimage.com/875x875/1100ff/fff',
          slider: false
        },
        {
          id: 4,
          name: 'Measuring Discrimination on the Airbnb Platform',
          category: '',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-30'),
          src: 'https://dummyimage.com/875x650/0000/fff',
          slider: true
        },
        {
          id: 5,
          category: '',
          name: 'Measuring Discrimination on the Airbnb Platform',
          title:
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.' +
            'In partnership with Color Of Change, Airbnb is launching a groundbreaking project to measure and fight bias and discrimination on the platform.',
          date: new Date('2020-08-15'),
          src: 'https://dummyimage.com/875x650/636363/0000',
          slider: true
        }
      ]
    }
  },
  computed: {
    filteredNews() {
      const news = this.news
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
      const news = this.news
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
