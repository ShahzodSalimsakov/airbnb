<template>
  <div class="text-black">
    <div class="my-20">
      Каждую ночь 2 миллиона гостей Airbnb останавливаются в одном из 100 000
      городов мира. В 191 стране можно выбрать одно из 6 миллионов объявлений —
      в сумме это больше, чем у 5 самых крупных гостиничных сетей, вместе
      взятых. Это возможно только потому, что люди доверяют друг другу.
    </div>
    <hr />
    <section class="mt-20">
      <div class="text-5xl mb-10 text-gray-800 font-bold">
        Безопасность и никак иначе
      </div>
      <div class="text-lg text-black">
        Главная цель Airbnb — ваша безопасность в сети и в реальной жизни.
      </div>
    </section>
    <Second :newsList="newsList" />
  </div>
</template>

<script>
import Second from '~/components/news-list/Second'
export default {
  name: 'overview',
  components: { Second },
  data() {
    return {
      url: 'trust/overview',
      newsList: []
    }
  },
  async mounted() {
    await this.getOverViewLists()
  },
  methods: {
    async getOverViewLists() {
      const { data } = await this.$axios.get(`/api/${this.url}`)
      this.newsList = data.data
    }
  }
}
</script>

<style scoped></style>
