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

      <Second :news-list="newsList" />

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

      <Second :news-list="newsList2" />

      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              TEXT
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Second from '~/components/news-list/Second'
export default {
  name: 'index',
  components: { Second },
  data() {
    return {
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
          title:
            'Вы всегда сами устанавливаете свои цены. А если нужен совет, наши инструменты помогут стать привлекательнее в условиях спроса в вашем городе.',
          src: '',
          ico: ''
        },
        {
          id: 1,
          name: 'Низкие сборы',
          title:
            'Мы не берем сборы за регистрацию. Airbnb вычитает с хозяев 3% за каждое бронирование. Это намного ниже, чем в среднем по отрасли.',
          src: '',
          ico: ''
        },
        {
          id: 2,
          name: 'Быстрые выплаты',
          title:
            'Когда гость приедет, мы отправим вам выплату на Paypal, банковский счет или другим доступным способом.',
          src: '',
          ico: ''
        }
      ]
    }
  },

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style scoped></style>
