<template>
  <div>
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
    <div class="text-2xl text-gray-900 font-medium mb-2">
      Рекомендованные статьи
    </div>
    <news-list-recomended />
  </div>
</template>

<script>
import NewsListRecomended from '~/components/news-list/NewsListRecomended'
export default {
  name: 'index',
  components: { NewsListRecomended },
  layout: 'default'
}
</script>

<style scoped></style>
