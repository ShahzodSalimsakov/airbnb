<template>
  <div>
    <AlignTabsWithToolbarTitle />

    <section class="text-gray-700 body-font">
      <h1
        class="title-font sm:text-5xl md:w-2/3 font-bold text-2xl mb-4 font-medium text-red-700"
      >
        За счастьем не обязательно ехать далеко
      </h1>
      <First :newsList="newsList" />
    </section>
  </div>
</template>

<script>
import AlignTabsWithToolbarTitle from '~/components/tabs/AlignTabsWithToolbarTitle'
import First from '~/components/news-list/First'
export default {
  components: { First, AlignTabsWithToolbarTitle },
  layout: 'default',
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
          url: '/'
        },
        {
          id: 1,
          name: 'Сходить в гости',
          title:
            'Такая поездка позволить покушать хорошую домашнюю еду, познакомится с новыми людьми и хорошо провести время. Можно сходить как с семьей, так и с друзьями.',
          src: 'https://www.afisha.uz/ui/movies//9/4550_0360527_b.jpg',
          url: '/'
        },
        {
          id: 2,
          name: 'Жилье целиком',
          title: 'Удобное жилье, где найдется место друзьям или родственникам.',
          src:
            'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg',
          url: '/'
        },
        {
          id: 3,
          name: 'Долгосрочная аренда',
          title: 'С Airbnb — как дома. Долгосрочная аренда жилья.',
          src:
            'https://a0.muscache.com/im/pictures/025b1594-202c-4be0-b91e-30799fc6aa31.jpg',
          url: '/'
        }
      ]
    }
  }
}
</script>
