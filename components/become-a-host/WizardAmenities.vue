<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-alert type="error" v-show="showRequiredError" ref="errorBlock">
        <span
          v-html="submitErrorText ? submitErrorText : $t('fillFields')"
        ></span>
      </v-alert>
      <v-form ref="form" v-model="valid">
        <v-card>
          <v-card-text>
            <div class="headline">{{ $t('WhatAmenitiesDoYouOffer') }}</div>
            <div class="body-2">
              {{ $t('WhatAmenitiesDoYouOfferBody1') }}
            </div>
          </v-card-text>
          <v-card-text>
            <v-col cols="12">
              <v-combobox
                :value="comfortEquipment"
                :items="items"
                multiple
                chips
                @change="(val) => changeData('comfortEquipment', val)"
              ></v-combobox>
            </v-col>
          </v-card-text>

          <v-card-text>
            <v-col cols="12">
              <div class="subtitle-1">{{ $t('safetyEquipment') }}</div>
              <v-combobox
                :value="safetyEquipment"
                :items="itemsSafety"
                multiple
                chips
                @change="(val) => changeData('safetyEquipment', val)"
              ></v-combobox>
            </v-col>
          </v-card-text>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import wizardStepSubmit from '~/mixins/wizardStepSubmit'
export default {
  mixins: [wizardStepSubmit],
  data() {
    return {
      items: ['Телевизор', 'Отопление', 'Кондиционер', 'Wi-fi', 'Утюг'],
      itemsSafety: [
        'Аптечка первой помощи',
        'Дверь спальни запирается',
        'Видео наблючение',
        'Решётки на окнах'
      ],
      step: '1_5'
    }
  },
  computed: {
    ...mapGetters({
      comfortEquipment: 'newLet/comfortEquipment',
      safetyEquipment: 'newLet/safetyEquipment'
    })
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    },
    getSubmitData() {
      return {
        comfortEquipment: this.comfortEquipment,
        safetyEquipment: this.safetyEquipment
      }
    }
  }
}
</script>
