<template>
  <div>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Overview />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Travels />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <Setout />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <CommunityStandards />
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <HousingSafety />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Overview from '~/pages/trust/component/Overview'
import Travels from '~/pages/trust/component/Travels'
import Setout from '~/pages/trust/component/Setout'
import CommunityStandards from '~/pages/trust/component/CommunityStandards'
import HousingSafety from '~/pages/trust/component/HousingSafety'
export default {
  name: 'TrustTabs',
  components: { HousingSafety, CommunityStandards, Setout, Travels, Overview },
  data() {
    return {
      tab: null,
      items: [
        'Обзор',
        'Путешествия',
        'Прием гостей',
        'Стандарты сообщества',
        'Программа «Безопасность жилья»'
      ]
    }
  }
}
</script>

<style scoped></style>
