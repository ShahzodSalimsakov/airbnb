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
      <div class="flex">
        <v-col md="8">
          <v-tabs background-color="white" color="primary">
            <v-tab>Хозяевам</v-tab>
            <v-tab>Путешественникам</v-tab>
            <v-tab-item v-for="n in 3" :key="n">
              <v-container fluid>
                <span class="text-3xl">Самое популярное</span>
                <v-row>
                  <v-col v-for="(item, i) in news" :key="i" cols="12" md="6">
                    <nuxt-link :to="item.link">
                      <v-img
                        :src="item.img"
                        aspect-ratio="1"
                        class="rounded-lg h-56"
                        alt="image"
                      ></v-img>

                      <div class="black--text font-semibold pt-3">
                        {{ item.title }}
                      </div>
                      <div class="text-gray-600 mt-4">
                        {{ item.description }}
                      </div>
                      <div class="text-gray-600 mt-4">
                        Обновлено {{ item.date }}
                      </div>
                    </nuxt-link>
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
            <div v-for="(item, index) in news.slice(0, 5)" :key="index">
              <v-divider v-if="index !== 0"></v-divider>
              <div v-if="item.date" :key="item.date" class="mt-2 text-sm">
                {{ item.date }}
              </div>
              <v-list-item-content>
                <nuxt-link
                  :to="item.link"
                  class="black--text font-semibold hover:underline nuxt-link-active nuxt-link-exact-active"
                  >{{ item.title }}</nuxt-link
                >
              </v-list-item-content>
            </div>
            <nuxt-link to="/news" class="black--text underline"
              >Показать все</nuxt-link
            ><v-icon>mdi-chevron-right</v-icon>
          </v-container>
        </v-col>
      </div>
    </v-row>
    <div class="flex justify-between">
      <span class="text-3xl">Последнее</span>
      <div>
        <nuxt-link to="/news" class="black--text underline"
          >Показать все</nuxt-link
        ><v-icon>mdi-chevron-right</v-icon>
      </div>
    </div>
    <v-row>
      <v-col v-for="(item, i) in news" :key="i" cols="12" md="4">
        <nuxt-link :to="item.link">
          <v-img
            :src="item.img"
            aspect-ratio="1"
            class="rounded-lg h-56"
            alt="image"
          ></v-img>

          <div class="black--text font-semibold pt-3">
            {{ item.title }}
          </div>
          <div class="text-gray-600 mt-4">
            {{ item.description }}
          </div>
          <div class="text-gray-600 mt-4">Обновлено {{ item.date }}</div>
        </nuxt-link>
      </v-col>
    </v-row>
    <div class="flex justify-between">
      <span class="text-3xl">Руководства по приему гостей</span>
    </div>
    <v-row>
      <v-col v-for="(item, i) in news" :key="i" cols="12" md="3">
        <nuxt-link :to="item.link">
          <v-img
            :src="item.img"
            aspect-ratio="1"
            class="rounded-lg h-56"
            alt="image"
            height="384px"
          >
            <div class="p-5">
              <div class="black--text font-semibold text-sm">
                <v-icon>mdi-book-open-variant</v-icon> Руководство
              </div>
              <div class="black--text font-semibold">
                {{ item.title }}
              </div>
            </div>
          </v-img>
        </nuxt-link>
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
    news: [
      {
        img: require('assets/images/img1.jpg'),
        date: dateToString(new Date()),
        title: 'Начните работу с протоколом уборки Airbnb',
        description:
          'Что в него входит и почему сейчас крайне важно соблюдать чистоту.',
        link: '/resources'
      },
      {
        img: require('assets/images/img2.jpg'),
        date: dateToString(new Date()),
        title: 'Как сделать объявление актуальным после кризиса',
        description: 'Превратите жилье в отличное место для отдыха.',
        link: '/resources'
      },
      {
        img: require('assets/images/img1.jpg'),
        date: dateToString(new Date()),
        title:
          'Фонд помощи суперхозяевам завершил работу. Мы выплатили 16,8 млн долларов США.',
        description: 'Превратите жилье в отличное место для отдыха.',
        link: '/resources'
      },
      {
        img: require('assets/images/img2.jpg'),
        date: dateToString(new Date()),
        title:
          'В обращении к хозяевам и организаторам генеральный директор Airbnb Брайан Чески рассказал о будущем индустрии путешествий и ответил на вопросы',
        description: 'Превратите жилье в отличное место для отдыха.',
        link: '/resources'
      }
    ]
  })
}
</script>

<style scoped></style>
