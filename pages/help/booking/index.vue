<template>
  <section class="text-gray-700 body-font help-booking-page">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-start mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-5xl title-font font-bold mb-2">
            {{ $t('bookingTravel') }}
          </h2>
          <p class="leading-relaxed text-xl text-base">
            {{ $t('bookingTravelTitle') }}
          </p>
        </div>

        <div
          class="sm:w-64 sm:h-64 h-40 w-40 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
        >
          <v-img
            src="https://a0.muscache.com/pictures/68f5781d-9858-4ac5-80c7-7e39645b31d7.jpg"
          />
        </div>
      </div>
    </div>
    <div class="text-2xl text-gray-900 font-bold mb-2">
      {{ $t('featuredArticles') }}
    </div>

    <v-row class="text-black">
      <v-col
        md="4"
        v-for="recom in recomendations"
        :key="recom.name"
        class="leading-9"
      >
        <ul class="align-left">
          <div class="text-black text-left font-semibold">
            {{ recom.name }}
          </div>
          <li
            v-for="element in recom.items"
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

    <div class="text-2xl text-gray-900 font-bold mb-2">
      {{ $t('allTopics') }}
    </div>

    <v-row class="text-black">
      <v-col md="4" v-for="theme in themes" :key="theme.name" class="leading-9">
        <div
          class="w-8 h-8 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 flex-shrink-0"
        >
          <v-icon size="65px" class="pl-2">mdi-{{ theme.icon }}</v-icon>
        </div>
        <ul class="align-left">
          <div class="text-black text-left font-semibold">
            {{ theme.name }}
          </div>
          <li
            v-for="element in theme.items"
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
  </section>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      recomendations: [
        {
          name: 'Изменения и отмены',
          items: [
            {
              link: '/',
              title:
                'Положение о применении уважительных причин и вспышка коронавируса COVID-19'
            },
            {
              link: '/',
              title: 'Как официально заявить об уважительных причинах?'
            },
            {
              link: '/',
              title:
                'Что, если мне нужно отменить бронирование из-за непредвиденных или непредотвратимых обстоятельств?'
            }
          ]
        },
        {
          name: 'Оплата бронирования',
          items: [
            {
              link: '/',
              title: 'Какие способы оплаты принимает Airbnb? '
            },
            {
              link: '/',
              title: 'Как отредактировать, удалить или добавить способ оплаты?'
            },
            {
              link: '/',
              title: 'Когда нужно будет оплатить бронирование?'
            }
          ]
        },
        {
          name: 'Доверие и безопасность',
          items: [
            {
              link: '/',
              title: 'Как Airbnb подтверждает личность?'
            },
            {
              link: '/',
              title:
                'Как быть, если кто-то просит меня оплатить бронирование вне сайта Airbnb?'
            },
            {
              link: '/',
              title: 'Советы по обеспечению безопасности для гостей'
            }
          ]
        }
      ],
      themes: [
        {
          name: 'Поиск и бронирование',
          icon: 'magnify',
          items: [
            {
              link: '/',
              title: 'Советы по поиску'
            },
            {
              link: '/',
              title: 'Бронирование жилья'
            },
            {
              link: '/',
              title: 'Бронирование Впечатлений Airbnb'
            },
            {
              link: '/',
              title: 'Бронирование деловых поездок и мероприятий'
            },
            {
              link: '/',
              title: 'Бронирование по программе Open Homes'
            },
            {
              link: '/',
              title: 'Общение с хозяевами'
            }
          ]
        },
        {
          name: 'Ваши бронирования',
          icon: 'calendar-text-outline',
          items: [
            {
              link: '/',
              title: 'Изменения'
            },
            {
              link: '/',
              title: 'Отмены'
            },
            {
              link: '/',
              title: 'Прибытие'
            },
            {
              link: '/',
              title: 'Подготовка к Впечатлению Airbnb'
            },
            {
              link: '/',
              title: 'Решение проблем'
            }
          ]
        },
        {
          name: 'Платежи, расценки и возвраты',
          icon: 'credit-card-outline',
          items: [
            {
              link: '/',
              title: 'Оплата бронирования'
            },
            {
              link: '/',
              title: 'Возвраты'
            },
            {
              link: '/',
              title: 'Расценки и сборы'
            },
            {
              link: '/',
              title: 'Залоги за сохранность имущества'
            },
            {
              link: '/',
              title: 'Купоны, бонусы и подарочные карты'
            },
            {
              link: '/',
              title: 'Счета и квитанции'
            },
            {
              link: '/',
              title: 'Налоги'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.help-booking-page ul a {
  color: #333;
}

.help-booking-page ul {
  padding: 0;
}
</style>
