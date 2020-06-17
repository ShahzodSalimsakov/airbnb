<template>
  <div>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'TrustTabs',
  props: ['items'],
  data() {
    return {
      tab: null
    }
  }
}
</script>

<style scoped></style>
