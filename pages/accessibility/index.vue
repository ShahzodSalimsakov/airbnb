<template>
  <div>
    <section class="text-gray-700 body-font pt-12">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-6xl font-bold text-3xl mb-4 font-medium text-gray-900"
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
          class="w-6/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://a0.muscache.com/pictures/e93b26f2-3f2d-4ad3-a89e-6b6309201d24.jpg"
        />

        <div class="flex mt-6 justify-center mb-8">
          <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
        </div>

        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
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
              <h2 class="text-gray-900 text-2xl title-font font-extrabold mb-2">
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
    <!--    Tips Guests   -->
    <section class="text-gray-700 body-font pt-12">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="flex mt-6 justify-center mb-8">
          <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
        </div>

        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
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
        v-for="guests in tipsGuests"
        :key="guests.id"
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          v-if="guests.positionLeft === true"
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ guests.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ guests.title }}
          </p>
        </div>
        <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            :src="guests.src"
          />
        </div>
        <div
          v-if="guests.positionLeft === false"
          class="lg:flex-grow md:w-1/2 lg:pl-24 sm:order-none order-first md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ guests.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ guests.title }}
          </p>
        </div>
      </div>
    </section>

    <section class="text-gray-700 body-font pt-12">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="w-6/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://a0.muscache.com/pictures/10bfbb08-c561-4bd6-b1d5-d7a319da0bb7.jpg"
        />

        <div class="flex mt-6 justify-center mb-8">
          <div class="w-20 h-px rounded-full bg-black inline-flex"></div>
        </div>

        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-5xl font-bold text-3xl mb-4 font-medium text-gray-900"
          >
            Советы хозяевам
          </h1>
          <p class="mb-8 leading-relaxed text-2xl">
            Вот как можно поддержать гостей с ограниченными возможностями
          </p>
        </div>
      </div>
    </section>

    <section class="text-gray-700 body-font pt-12">
      <div
        v-for="owners in tipsOwners"
        :key="owners.id"
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          v-if="owners.positionLeft === true"
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ owners.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ owners.title }}
          </p>
        </div>
        <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            :src="owners.src"
          />
        </div>
        <div
          v-if="owners.positionLeft === false"
          class="lg:flex-grow md:w-1/2 lg:pl-24 sm:order-none order-first md:pl-16 flex flex-col md:items-start md:text-left items-center text-left"
        >
          <h1
            class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"
          >
            {{ owners.name }}
          </h1>
          <p class="mb-8 leading-relaxed">
            {{ owners.title }}
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
      tipsGuests: [
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
      ],
      tipsOwners: [
        {
          id: 0,
          name: 'Сделайте жилье более доступным',
          title:
            'Вероятно, вы не догадываетесь, что в вашем объявлении уже есть удобства для гостей с особыми потребностями, такие как широкие дверные проемы или дополнительное пространство вокруг унитаза, или что вы можете добавить некоторые из них без особых усилий или затрат. Узнайте, как вы можете поддержать гостей с ограниченной мобильностью.',
          src:
            'https://a0.muscache.com/pictures/6c347c3c-1e92-4e81-9a5f-a1b19c84d47b.jpg',
          positionLeft: false
        },
        {
          id: 1,
          name: 'Добавьте фото для гостей с ограниченными возможностями',
          title:
            'Добавив фото удобств для гостей с особыми потребностями, вы будете каждый месяц привлекать внимание более 70 000 пользователей с ограниченной мобильностью. Чтобы начать, перейдите в область Управление объявлением для объявления, для которого хотите добавить удобства для гостей с особыми потребностями. Напишите подписи к каждому фото и ознакомьтесь с нашими советами по фото.',
          src:
            'https://a0.muscache.com/pictures/58b84b86-762d-4c49-bd34-4d2dd2a6f79f.jpg',
          positionLeft: true
        },
        {
          id: 2,
          name: 'Узнайте о животных-помощниках',
          title:
            'Служебные животные помогают людям с различными формами инвалидности, и правила Airbnb почти всегда разрешают их использование. Узнайте, как поддерживать гостей с животными-помощниками.',
          src:
            'https://a0.muscache.com/pictures/2b7b568c-b2b2-4779-91c0-d066ded6ddb7.jpg',
          positionLeft: false
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
