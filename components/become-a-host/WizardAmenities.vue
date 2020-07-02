<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('WhatAmenitiesDoYouOffer') }}</div>
          <div class="body-2">
            {{ $t('WhatAmenitiesDoYouOfferBody1') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-col cols="12">
            <v-combobox
              :value="select"
              :items="items"
              multiple
              chips
              @change="(val) => changeData('select', val)"
            ></v-combobox>
          </v-col>
        </v-card-text>

        <v-card-text>
          <v-col cols="12">
            <div class="subtitle-1">{{ $t('safetyEquipment') }}</div>
            <v-combobox
              :value="selectSafety"
              :items="itemsSafety"
              multiple
              chips
              @change="(val) => changeData('selectSafety', val)"
            ></v-combobox>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: ['Телевизор', 'Отопление', 'Кондиционер', 'Wifi', 'Утюг'],
      itemsSafety: [
        'Аптечка первой помощи',
        'Дверь спальни запирается',
        'Видео наблючение',
        'Решётки на окнах'
      ]
    }
  },
  computed: {
    ...mapGetters({
      select: 'newLet/select',
      selectSafety: 'newLet/selectSafety'
    })
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    }
  }
}
</script>
