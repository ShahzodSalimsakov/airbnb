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
              <span class="text-3xl">Самое популярное</span>
              <v-container fluid>
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
    <div class="mt-20">
      <div class="font-bold pb-4 text-2xl">Дополнительные ресурсы</div>
      <nuxt-link to="/help" class="black--text">
        <div class="border p-8 rounded-md w-1/2">
          <div class="font-bold mb-1 text-2xl">Нужна помощь?</div>
          <div class="w-3/4 mb-7">
            Найдите полезные статьи и ответы на часто задаваемые вопросы.
          </div>
          <div class="flex">
            <div class="font-bold text-lg">В Центр помощи</div>
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div>
      <div class="font-bold pb-4 mt-16 text-2xl">Больше тем</div>
      <div class="flex col-12">
        <ul class="col-3">
          <div class="font-bold">Объявление онлайн</div>
          <li>
            <nuxt-link to="#"> Детали объявления и фото</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Настройки календаря и бронирований
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Стратегии ценообразования
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Маркетинг и продвижение
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Инструменты для объявлений
            </nuxt-link>
          </li>
        </ul>
        <ul class="col-3">
          <div class="font-bold">
            Ваше жилье
          </div>
          <li>
            <nuxt-link to="#">Обстановка и удобства</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Дизайн и декор</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Доступность</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Чистота</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Airbnb Plus</nuxt-link>
          </li>
        </ul>
        <ul class="col-3">
          <div class="font-bold">Гости и гостеприимство</div>
          <li>
            <nuxt-link to="#">Радуйте гостей</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Общение и прибытие</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Рейтинг и отзывы</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Возможные проблемы</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Борьба с дискриминацией
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Суперхозяин</nuxt-link>
          </li>
        </ul>
        <ul class="col-3">
          <div class="font-bold">Профессиональный прием гостей</div>
          <li>
            <nuxt-link to="#">Истории успеха</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Инструменты и функции</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Развитие бизнеса</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">Новости</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!--    <div class="flex justify-between">-->
    <!--      <span class="text-3xl">Руководства по приему гостей</span>-->
    <!--    </div>-->
    <!--    <v-row>-->
    <!--      <v-col v-for="(item, i) in news" :key="i" cols="12" md="3">-->
    <!--        <nuxt-link :to="item.link">-->
    <!--          <v-img-->
    <!--            :src="item.img"-->
    <!--            aspect-ratio="1"-->
    <!--            class="rounded-lg h-56"-->
    <!--            alt="image"-->
    <!--            height="384px"-->
    <!--          >-->
    <!--            <div class="p-5">-->
    <!--              <div class="black&#45;&#45;text font-semibold text-sm">-->
    <!--                <v-icon>mdi-book-open-variant</v-icon> Руководство-->
    <!--              </div>-->
    <!--              <div class="black&#45;&#45;text font-semibold">-->
    <!--                {{ item.title }}-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </v-img>-->
    <!--        </nuxt-link>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
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
<style scoped>
li {
  margin-top: 8px;
}
li > a {
  color: black;
}
</style>
