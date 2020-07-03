<template>
  <div class="">
    <section>
      <h1 class="text-5xl w-2/5 leading-none">
        <span class="text-red-600"> {{ $t('coronavirusResources') }}</span>
      </h1>
    </section>
    <div class="pt-2 text-xl">
      {{ $t('coronavirusResourcesTitle') }}
    </div>
    <v-row>
      <v-col class="flex">
        <v-col md="8">
          <v-tabs background-color="white" color="primary">
            <v-tab>Хозяевам</v-tab>
            <v-tab>Путешественникам</v-tab>
            <v-tab-item v-for="n in 3" :key="n">
              <v-container fluid>
                <span class="text-3xl">Самое популярное</span>
                <v-row>
                  <v-col v-for="(img, i) in imgArr" :key="i" cols="12" md="4">
                    <v-img
                      :src="img.source"
                      :lazy-src="img.placeholder"
                      aspect-ratio="1"
                      class="rounded-lg"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col md="4 mt-12">
          <v-container fluid>
            <span class="text-3xl">
              {{ $t('news') }}
            </span>
            <div v-for="(item, index) in items.slice(0, 5)" :key="index">
              <div v-if="item.date" :key="item.date">{{ item.date }}</div>
              <v-divider></v-divider>
              <v-list-item-content>
                <nuxt-link
                  :to="item.link"
                  class="black--text font-semibold hover:underline nuxt-link-active nuxt-link-exact-active"
                  >{{ item.title }}</nuxt-link
                >
              </v-list-item-content>
            </div>
          </v-container>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { formatWithOptions } from 'date-fns/fp'
import { ru } from 'date-fns/locale'
const dateToString = formatWithOptions({ locale: ru }, 'do MMM yyyy')
export default {
  name: 'Index',
  data: () => ({
    imgArr: [],
    items: [
      {
        date: dateToString(new Date()),
        title:
          'Фонд помощи суперхозяевам завершил работу. Мы выплатили 16,8 млн долларов США.',
        link: ''
      },
      {
        date: dateToString(new Date()),
        title:
          'В обращении к хозяевам и организаторам генеральный директор Airbnb Брайан Чески рассказал о будущем индустрии путешествий и ответил на вопросы',
        link: ''
      }
    ]
  }),
  created() {
    for (let i = 0; i < 6; i++) {
      this.imgArr.push({
        placeholder: `https://picsum.photos/10/6?image=${i * i * 5 + 10}`,
        source: `https://picsum.photos/500/300?image=${i * i * 5 + 10}`
      })
    }
  }
}
</script>

<style scoped></style>
