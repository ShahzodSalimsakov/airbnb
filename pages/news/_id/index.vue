<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
      <v-img
        v-if="item.detail_photo"
        :aspect-ratio="16 / 2"
        :src="`${apiDomain}/${item.detail_photo}`"
      ></v-img>
    </div>
  </div>
</template>
<script>
require('dotenv').config()
export default {
  data() {
    return {
      apiDomain: process.env.apiDomain,
      items: [],
      url: 'news'
    }
  },
  methods: {
    async getAllTemplates() {
      const { data } = await this.$axios.get(
        `/api/${this.url}?filter[0][key]=id&filter[0][value]=${this.$route.params.id}`,
        console.log(
          `/api/${this.url}?filter[0][key]=id&filter[0][value]=${this.$route.params.id}`
        )
      )
      this.items = data.data
      console.log(this.items)
      console.log(this.$route.params.id)
    }
  },
  async mounted() {
    await this.getAllTemplates()
  }
}
</script>
