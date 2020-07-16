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
      const { data } = await this.$axios.get(`/api/${this.url}`, {
        params: {
          id: this.$route.params.id
        }
      })
      this.items = data.data
    }
  },
  async mounted() {
    await this.getAllTemplates()
  }
}
</script>
