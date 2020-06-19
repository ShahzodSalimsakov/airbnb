<template>
  <section class="text-gray-700 body-font">
    <h1
      class="title-font sm:text-5xl md:w-2/3 font-bold text-2xl mb-4 font-medium text-red-700 p-4"
    >
      За счастьем не обязательно ехать далеко
    </h1>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <a
          v-for="list in newsList"
          :key="list.id"
          :class="[list.id === 0 ? 'p-4 md:w-3/3 w-full' : 'p-4 md:w-1/3']"
          href="/"
        >
          <div>
            <div
              class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-64 md:h-36 w-full object-cover object-center"
                :src="list.src"
                alt="blog"
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-black mb-3">
                  {{ list.name }}
                </h1>
                <p class="leading-relaxed mb-3 text-gray-600">
                  {{ list.title }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'first',
  data() {
    return {
      newsList: [
        {
          id: 0,
          name: 'Отдых поблизости',
          title:
            'Поездки на небольшие расстояния помогут отвлечься от дел или укрепить отношения с близкими.',
          src:
            'http://villa-dioniz.rovinj-hotels.com/data/Photos/OriginalPhoto/4126/412659/412659366.JPEG',
          positionLeft: true
        },
        {
          id: 1,
          name: 'Сходить в гости',
          title:
            'Такая поездка позволить покушать хорошую домашнюю еду, познакомится с новыми людьми и хорошо провести время. Можно сходить как с семьей, так и с друзьями.',
          src: 'https://www.afisha.uz/ui/movies//9/4550_0360527_b.jpg',
          positionLeft: false
        },
        {
          id: 2,
          name: 'Жилье целиком',
          title: 'Удобное жилье, где найдется место друзьям или родственникам.',
          src:
            'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg',
          positionLeft: true
        },
        {
          id: 3,
          name: 'Долгосрочная аренда',
          title: 'С Airbnb — как дома. Долгосрочная аренда жилья.',
          src:
            'https://a0.muscache.com/im/pictures/025b1594-202c-4be0-b91e-30799fc6aa31.jpg',
          positionLeft: true
        }
      ]
    }
  }
}
</script>

<style scoped></style>
