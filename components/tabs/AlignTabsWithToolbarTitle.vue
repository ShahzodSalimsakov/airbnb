<template>
  <div>
    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Housing />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Housing />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Item 3
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Housing from '~/components/search/Housing'
export default {
  name: 'AlignTabsWithToolbarTitle',
  components: { Housing },
  data() {
    return {
      tab: null,
      items: ['Жилье', 'Долгосрочная аренда', 'Впечатления']
    }
  }
}
</script>

<style scoped></style>
