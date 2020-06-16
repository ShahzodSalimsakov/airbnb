<template>
  <div>
    <section class="text-gray-700 body-font pt-12">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-6xl font-bold text-3xl mb-4 font-medium text-gray-800"
          >
            Airbnb для всех
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            Вот как мы строим Airbnb для всех
          </p>
        </div>
      </div>

      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://a0.muscache.com/pictures/e93b26f2-3f2d-4ad3-a89e-6b6309201d24.jpg"
        />

        <div class="flex mt-6 justify-center mb-8">
          <div class="w-20 h-1 rounded-full bg-black inline-flex"></div>
        </div>

        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-6xl font-bold text-3xl mb-4 font-medium text-gray-800"
          >
            К чему мы стремимся
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            Мы хотим, чтобы путешествия были более инклюзивными и доступными для
            всех. У этой работы не может быть конечной точки. Посмотрите, что мы
            уже делаем для повышения инклюзивности на платформе.
          </p>
        </div>
      </div>
    </section>
    <!-- Section One -->
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            v-for="secOne in sectionOne"
            :key="secOne.id"
            class="p-4 md:w-1/2 md:mb-0 mb-6 flex"
          >
            <div class="flex-grow pl-6">
              <h2 class="text-gray-800 text-2xl title-font font-extrabold mb-2">
                {{ secOne.name }}
              </h2>
              <p class="leading-relaxed text-base">
                {{ secOne.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    Photo Section-->
    <section class="text-gray-700 body-font pt-12">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="flex mt-6 justify-center mb-8">
          <div class="w-20 h-1 rounded-full bg-black inline-flex"></div>
        </div>

        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-6xl font-bold text-3xl mb-4 font-medium text-gray-800"
          >
            Советы гостям
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            Мы знаем, что найти жилье или Впечатление, отвечающие вашим
            потребностям, может быть непросто. Вот несколько советов о том, как
            сделать поездки максимально приятными.
          </p>
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font pt-12">
      <div
        v-for="secTwo in sectionTwo"
        :key="secTwo.id"
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          v-if="secTwo.positionLeft === true"
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ secTwo.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ secTwo.title }}
          </p>
        </div>
        <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            :src="secTwo.src"
          />
        </div>
        <div
          v-if="secTwo.positionLeft === false"
          class="lg:flex-grow md:w-1/2 lg:pl-24 sm:order-none order-first md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ secTwo.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ secTwo.title }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      sectionOne: [
        {
          id: 0,
          name: 'Улучшенная точность',
          title:
            'Гости с ограниченной мобильностью определяют по фото, подходит ли им объявление. Поэтому мы требуем, чтобы хозяева публиковали фото всех удобств для гостей с особыми потребностями, и в объявлениях есть специальный раздел с такими фото.'
        },
        {
          id: 1,
          name:
            'Стандарты цифровой доступности для людей с особыми потребностями',
          title:
            'Мы работаем над стандартами цифровой доступности, изложенными в Руководстве по доступности веб-контента. Мы также вкладываем средства в автоматизированные инструменты тестирования, чтобы выявлять больше проблем.'
        },
        {
          id: 2,
          name:
            'Другие объявления с удобствами для гостей с особыми потребностями',
          title:
            'Мы прилагаем все усилия, чтобы на Airbnb было больше объявлений с удобствами для гостей с особыми потребностями. Мы также упрощаем их поиск, добавляем удобные фильтры и фото таких удобств, которые отображаются на странице с результатами поиска.'
        },
        {
          id: 3,
          name: 'Впечатления, доступные для людей с особыми потребностями',
          title:
            'Более доступные Впечатления на Airbnb — уникальные мероприятия, которые проводят местные эксперты, — уже скоро появятся на платформе.'
        }
      ],
      sectionTwo: [
        {
          id: 0,
          name: 'Найдите нужное место',
          title:
            'Используйте фильтры поиска, чтобы просматривать только те места или Впечатления, которые соответствуют вашим потребностям в доступности. Просматривая понравившиеся объявления, заглядывайте в раздел «Удобства для гостей с особыми потребностями», где будут фото и описания важных для вас вещей.',
          src:
            'https://a0.muscache.com/pictures/ab07bef1-86f8-429d-8fd7-2e1d14b66983.jpg',
          positionLeft: true
        },
        {
          id: 1,
          name: 'Поговорите с потенциальными хозяевами',
          title:
            'Если у вас есть особые потребности, обязательно напишите хозяину, прежде чем бронировать жилье. Вы можете написать потенциальным хозяевам по ссылке «Связаться с хозяином» на странице объявления или Впечатления.',
          src:
            'https://a0.muscache.com/pictures/88c6ef5c-3f51-4f61-8312-660f0f357b1c.jpg',
          positionLeft: false
        },
        {
          id: 2,
          name: 'Помогите другим гостям',
          title:
            'Что бы вы хотели узнать перед бронированием? Напишите подробный отзыв, чтобы гости с ограниченной мобильностью знали, чего ожидать.',
          src:
            'https://a0.muscache.com/pictures/485486e9-2cd6-465f-a68e-513a916d934a.jpg',
          positionLeft: true
        }
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 640px) {
  .v-application .order-first {
    order: 0 !important;
  }
}
</style>
