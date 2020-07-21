<template>
  <div class="text-black">
    <section class="mt-20">
      <div class="text-5xl mb-10 text-gray-800 font-bold">
        Каждое жилье на Airbnb уникальны
      </div>
      <div class="text-lg text-black mb-20">
        Что можно сделать, чтобы поездка прошла максимально гладко.
      </div>
    </section>
    <section>
      <time-line :props="items" :color="color" />
    </section>
  </div>
</template>

<script>
import TimeLine from '~/components/time-line/timeLine'
export default {
  name: 'Setout',
  components: { TimeLine },
  data() {
    return {
      url: 'trust/hosting',
      color: 'amber',
      items: []
    }
  },
  methods: {
    async getTravelsData() {
      const { data } = await this.$axios.get(`/api/${this.url}`)
      this.items = data.data
    }
  },
  async mounted() {
    await this.getTravelsData()
  }
}
</script>

<style scoped></style>
