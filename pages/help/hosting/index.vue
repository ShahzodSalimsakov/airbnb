<template>
  <section class="text-gray-700 body-font help-booking-page">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
      >
        <div class="flex-grow sm:text-left text-start mt-6 sm:mt-0">
          <h2 class="text-gray-900 text-5xl title-font font-bold mb-2">
            {{ $t('receptionGuest') }}
          </h2>
          <p class="leading-relaxed text-xl text-base">
            Получите помощь с изменением бронирования, общением с хозяином и не
            только.
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
      Рекомендованные статьи
    </div>

    <v-row class="text-black">
      <v-col md="4" class="leading-9">
        <ul class="align-left">
          <div class="text-black text-left font-semibold">
            {{ menuCol1.name }}
          </div>
          <li
            v-for="element in menuCol1.items"
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
      <v-col md="4" class="leading-9">
        <ul class="align-left">
          <div class="text-black text-left font-semibold">
            {{ menuCol2.name }}
          </div>
          <li
            v-for="element in menuCol2.items"
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
      <v-col md="4" class="leading-9">
        <ul class="align-left">
          <div class="text-black text-left font-semibold">
            {{ menuCol3.name }}
          </div>
          <li
            v-for="element in menuCol3.items"
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
      Все темы
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      menuCol1: {
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
      menuCol2: {
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
      menuCol3: {
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
