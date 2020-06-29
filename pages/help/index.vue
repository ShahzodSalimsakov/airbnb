<template>
  <div class="help-page">
    <div class="text-3xl text-gray-900 font-bold mb-2">
      Здравствуйте! Чем вам помочь?
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg inline-flex flex">
            <div
              class="xl:w-1/3 md:w-1/3 sm:w-1/3 w-10 h-24 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <nuxt-link to="/help/booking">
                <img
                  class="h-24"
                  src="https://a0.muscache.com/pictures/68f5781d-9858-4ac5-80c7-7e39645b31d7.jpg"
                />
              </nuxt-link>
            </div>
            <div class="xl:w-2/3 md:w-2/3 sm:w-2/3 pl-7">
              <nuxt-link to="/help/booking">
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Бронирование
                </h2>
              </nuxt-link>
              <p class="leading-relaxed text-base">
                Получите помощь с изменением бронирования, общением с хозяином и
                не только.
              </p>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="border border-gray-300 p-6 rounded-lg inline-flex flex">
            <div
              class="xl:w-1/3 md:w-1/3 sm:w-1/3 w-10 h-24 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
            >
              <nuxt-link to="/help/hosting">
                <img
                  class="h-24"
                  src="https://a0.muscache.com/pictures/7e9ddf18-ed1a-45ce-885d-40bdece3eb63.jpg"
                />
              </nuxt-link>
            </div>
            <div class="xl:w-2/3 md:w-2/3 sm:w-2/3 pl-7">
              <nuxt-link to="/help/hosting">
                <h2 class="text-lg text-gray-900 font-bold title-font mb-2">
                  Приём гостей
                </h2>
              </nuxt-link>
              <p class="leading-relaxed text-base">
                Получите помощь с обновлением календаря, общением с гостями и не
                только.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-2xl text-gray-900 font-bold mb-2">
      Рекомендованные статьи
    </div>
    <news-list-recomended
      :items="sortRecomendation"
      icon="lightbulb-on-outline"
    />
    <div class="help-page-menu">
      <div class="text-2xl text-gray-900 font-bold mb-6">
        Что нужно знать об Airbnb
      </div>
      <v-row class="text-black">
        <v-col md="3" class="leading-9">
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="65px" class="pl-2">mdi-flag-outline</v-icon>
          </div>
          <ul class="align-left">
            <div class="text-black text-left font-semibold">
              Об Airbnb
            </div>
            <li
              v-for="element in menuCol1"
              :key="element.link"
              class="d-block text-black"
              text
            >
              <nuxt-link :to="element.link" class="text-black">
                {{ element.title }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>

        <v-col md="3" class="leading-9">
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="65px" class="pl-2">mdi-account-check</v-icon>
          </div>
          <ul class="align-left">
            <div class="text-black text-left font-semibold">
              Ваш аккаунт
            </div>
            <li
              v-for="element in menuCol2"
              :key="element.link"
              class="d-block text-black"
              text
            >
              <nuxt-link :to="element.link" class="text-black">
                {{ element.title }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>

        <v-col md="3" class="leading-9">
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="65px" class="pl-2">mdi-shield-check-outline</v-icon>
          </div>
          <ul class="align-left">
            <div class="text-black text-left font-semibold">
              Безопасность и доступность
            </div>
            <li
              v-for="element in menuCol3"
              :key="element.link"
              class="d-block text-black"
              text
            >
              <nuxt-link :to="element.link" class="text-black">
                {{ element.title }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>

        <v-col md="3" class="leading-9">
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="65px" class="pl-2">mdi-book-open-variant</v-icon>
          </div>
          <ul class="align-left">
            <div class="text-black text-left font-semibold">
              Условия и правила
            </div>
            <li
              v-for="element in menuCol4"
              :key="element.link"
              class="d-block text-black"
              text
            >
              <nuxt-link :to="element.link" class="text-black">
                {{ element.title }}
              </nuxt-link>
            </li>
          </ul>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import NewsListRecomended from '~/components/news-list/NewsListRecomended'
export default {
  name: 'index',
  components: { NewsListRecomended },
  data() {
    return {
      recomendation: [
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        },
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        },
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        },
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        },
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        },
        {
          id: 0,
          name:
            'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?',
          title:
            'Обратите внимание: в статье не рассматриваются обстоятельства, связанные с пандемией коронавируса COVID-19. Подробности на эту тему, в частн…',
          link: '/'
        }
      ],
      menuCol1: [
        { link: '/', title: 'С чего начать' },
        { link: '/', title: 'Как всё устроено на Airbnb' },
        { link: '/', title: 'Переписка' },
        { link: '/', title: 'Стандарты сообщества' },
        { link: '/', title: 'Партнерство' }
      ],
      menuCol2: [
        { link: '/', title: 'Как создать аккаунт' },
        { link: '/', title: 'Управление аккаунтом' },
        { link: '/', title: 'Удостоверение личности и подтверждение' },
        { link: '/', title: 'Защита аккаунта' },
        { link: '/', title: 'Отзывы' }
      ],
      menuCol3: [
        { link: '/', title: 'Вопросы безопасности' },
        { link: '/', title: 'Советы по безопасности' },
        { link: '/', title: 'Как сообщить о проблеме' },
        { link: '/', title: 'Доступность' }
      ],
      menuCol4: [
        { link: '/', title: 'Правила для всех участников' },
        { link: '/', title: 'Дополнительные правила' },
        { link: '/', title: 'Требования' },
        { link: '/', title: 'Дополнительные правила и условия' },
        { link: '/', title: 'Сборы' },
        { link: '/', title: 'Другие правовые ресурсы' },
        { link: '/', title: 'Официальное предупреждение о поездках' }
      ]
    }
  },
  computed: {
    sortRecomendation() {
      const recomendation = this.recomendation
      return recomendation.slice(0, 6)
    }
  },
  layout: 'default'
}
</script>

<style>
.help-page ul a {
  color: #333;
}
.help-page-menu ul {
  padding: 0;
}
</style>
