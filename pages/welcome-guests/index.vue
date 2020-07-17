<template>
  <div>
    <v-card
      class="pr-16 mb-8"
      style="
        height: 500px;
        width: 100%;
        background: url('http://ugolovka.com/wp-content/uploads/2016/03/posledstviya-otkaza-poterpevshih-ot-primireniya-1140x530.jpg');
      "
    >
      <v-card-title
        md="4"
        justify="center"
        class="content-center bg-white h-64 float-right"
      >
        <headline class="text-3xl text-red-700">Нужно сделать</headline>
      </v-card-title>
    </v-card>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:mb-0 mb-6 flex">
            <div class="flex-grow pl-6">
              <h2 class="text-gray-800 text-2xl title-font font-extrabold mb-2">
                Что мне даст прием гостей с Airbnb?
              </h2>
              <p class="leading-relaxed text-base">
                Сдавайте любое свободное жилье — с Airbnb принимать
                путешественников просто и безопасно. Вы сами контролируете
                свободные даты, цены, правила дома и общение с гостями.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mt-6 justify-center mb-8">
        <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
      </div>
      <div class="text-center w-full">
        <h1
          class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
        >
          Три шага к приему гостей
        </h1>
      </div>

      <Second :news-list="three_steps" />

      <div class="flex mt-6 justify-center mb-8">
        <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
      </div>
      <div class="text-center w-full">
        <h1
          class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
        >
          Простые платежи
        </h1>
      </div>

      <Second :news-list="simple_payments" class="pb-12" />

      <reviews-carousel
        :items="reviews_slider"
        :height="height"
        class="mb-16"
        hide-delimiters
      />

      <div class="flex mt-6 justify-center mb-8">
        <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
      </div>
      <div class="text-center w-full">
        <h1
          class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
        >
          Об Airbnb
        </h1>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            v-for="list in about"
            :key="list.id"
            class="p-4 md:w-1/2 sm:mb-0 mb-6 mt-10"
          >
            <h2 class="text-2xl font-black title-font text-gray-900 mt-5 mb-7">
              {{ list.name }}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              {{ list.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Second from '~/components/news-list/Second'
import ReviewsCarousel from '~/components/slider-carousel/reviews-carousel'
require('dotenv').config()
export default {
  name: 'index',
  components: { Second, ReviewsCarousel },
  data() {
    return {
      apiDomain: process.env.apiDomain,
      three_steps_url: 'welcome_guests/three_steps',
      simple_payments_url: 'welcome_guests/simple_payments',
      about_url: 'welcome_guests/about',
      reviews_slider_url: 'welcome_guests/reviews_slider',
      three_steps: [],
      simple_payments: [],
      about: [],
      reviews_slider: [],
      height: 600,
      news: [
        {
          id: 0,
          name:
            'Прием гостей помог мне оплатить новую кухню и другие новшества.',
          title:
            'Тесса принимает гостей в Лондоне, чтобы иметь дополнительный заработок',
          preview_photo:
            'https://a0.muscache.com/pictures/4e8524b4-205e-4fdf-9f0a-f1f36905c8f6.jpg',
          slider: true
        }
      ],
      newsList: [
        {
          id: 0,
          name: 'Бесплатное объявление',
          title:
            'Зарегистрируйтесь бесплатно, чтобы сдавать любое жилье: от места в общей комнате до целого дома.',
          src: '',
          ico: 'check-circle-outline'
        },
        {
          id: 1,
          name: 'Ваши условия',
          title:
            'Установите удобный для себя график, цены и требования к гостям. Мы с радостью поможем, если у вас возникнут вопросы.',
          src: '',
          ico: 'check-circle-outline'
        },
        {
          id: 2,
          name: 'Ждите первых гостей',
          title:
            'После публикации объявления гости, которые отвечают вашим требованиям, смогут отправить запрос. Вы можете пообщаться с ними до приезда в переписке на нашем сайте.',
          src: '',
          ico: 'check-circle-outline'
        }
      ],
      newsList2: [
        {
          id: 0,
          name: 'Устанавливайте свои цены',
          text:
            'Вы всегда сами устанавливаете свои цены. А если нужен совет, наши инструменты помогут стать привлекательнее в условиях спроса в вашем городе.'
        },
        {
          id: 1,
          name: 'Низкие сборы',
          text:
            'Мы не берем сборы за регистрацию. Airbnb вычитает с хозяев 3% за каждое бронирование. Это намного ниже, чем в среднем по отрасли.'
        },
        {
          id: 2,
          name: 'Быстрые выплаты',
          text:
            'Когда гость приедет, мы отправим вам выплату на Paypal, банковский счет или другим доступным способом.'
        }
      ],
      newsList3: [
        {
          id: 0,
          name: 'Что такое Airbnb?',
          title:
            'На Airbnb гости находят, где остановиться и чем заняться по всему миру. За сообщество отвечают организаторы, которые предоставляют гостям уникальную возможность почувствовать себя местным жителем.'
        },
        {
          id: 1,
          name: 'Как это — принимать гостей?',
          title:
            'Если у вас есть свободная комната, жилье целиком или уникальные знания, вы можете делиться с другими и получать доход. Можно принимать гостей дома, организовывать для них мероприятия или делать и то и другое. Когда принимать гостей, решаете вы.'
        }
      ]
    }
  },

  methods: {
    async getThreeStepsTemplates() {
      const { data } = await this.$axios.get(`/api/${this.three_steps_url}`)
      this.three_steps = data.data
    },
    async getSimplePaymentsTemplates() {
      const { data } = await this.$axios.get(`/api/${this.simple_payments_url}`)
      this.simple_payments = data.data
    },
    async getAboutTemplates() {
      const { data } = await this.$axios.get(`/api/${this.about_url}`)
      this.about = data.data
    },
    async getReviewsSliderTemplates() {
      const { data } = await this.$axios.get(`/api/${this.reviews_slider_url}`)
      this.reviews_slider = data.data
      console.log(data.data)
    },
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  },
  async mounted() {
    await this.getThreeStepsTemplates()
    await this.getSimplePaymentsTemplates()
    await this.getAboutTemplates()
    await this.getReviewsSliderTemplates()
  }
}
</script>

<style scoped></style>
