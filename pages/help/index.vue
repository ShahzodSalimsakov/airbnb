<template>
  <div class="help-page">
    <div class="text-3xl text-gray-900 font-bold mb-2">
      {{ $t('helpPageHeadline') }}
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
                  {{ $t('bookingTravel') }}
                </h2>
              </nuxt-link>
              <p class="leading-relaxed text-base">
                {{ $t('bookingTravelTitle') }}
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
                  {{ $t('receptionGuest') }}
                </h2>
              </nuxt-link>
              <p class="leading-relaxed text-base">
                {{ $t('receptionGuestTitle') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-2xl text-gray-900 font-bold mb-2">
      {{ $t('featuredArticles') }}
    </div>
    <news-list-recomended
      :items="sortRecomendation"
      icon="lightbulb-on-outline"
    />
    <div class="help-page-menu">
      <div class="text-2xl text-gray-900 font-bold mb-6">
        {{ $t('whatYouNeedToKnowAboutAirbnb') }}
      </div>
      <v-row class="text-black">
        <v-col v-for="menu in menus" :key="menu.name" md="3" class="leading-9">
          <div
            class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
          >
            <v-icon size="65px" class="pl-2">mdi-{{ menu.icon }}</v-icon>
          </div>
          <ul class="align-left">
            <div class="text-black text-left font-semibold">
              {{ menu.name }}
            </div>
            <li
              v-for="element in menu.items"
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
      menus: [
        {
          name: 'Об Airbnb',
          icon: 'flag-outline',
          items: [
            { link: '/', title: 'С чего начать' },
            { link: '/', title: 'Как всё устроено на Airbnb' },
            { link: '/', title: 'Переписка' },
            { link: '/', title: 'Стандарты сообщества' },
            { link: '/', title: 'Партнерство' }
          ]
        },
        {
          name: 'Ваш аккаунт',
          icon: 'account-check',
          items: [
            { link: '/', title: 'Как создать аккаунт' },
            { link: '/', title: 'Управление аккаунтом' },
            { link: '/', title: 'Удостоверение личности и подтверждение' },
            { link: '/', title: 'Защита аккаунта' },
            { link: '/', title: 'Отзывы' }
          ]
        },
        {
          name: 'Безопасность и доступность',
          icon: 'shield-check-outline',
          items: [
            { link: '/', title: 'Вопросы безопасности' },
            { link: '/', title: 'Советы по безопасности' },
            { link: '/', title: 'Как сообщить о проблеме' },
            { link: '/', title: 'Доступность' }
          ]
        },
        {
          name: 'Условия и правила',
          icon: 'book-open-variant',
          items: [
            { link: '/', title: 'Правила для всех участников' },
            { link: '/', title: 'Дополнительные правила' },
            { link: '/', title: 'Требования' },
            { link: '/', title: 'Дополнительные правила и условия' },
            { link: '/', title: 'Сборы' },
            { link: '/', title: 'Другие правовые ресурсы' },
            { link: '/', title: 'Официальное предупреждение о поездках' }
          ]
        }
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
