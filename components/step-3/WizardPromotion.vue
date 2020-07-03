<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('somethingSpecialFirstGuests') }}</div>
        </v-card-text>
        <v-card-text>
          <v-radio-group
            :value="specOffer"
            :mandatory="false"
            @change="(val) => changeData('specOffer', val)"
          >
            <v-row>
              <v-col md="10">
                <div class="text-lg">
                  {{ $t('somethingSpecialFirstGuestsSale') }}
                </div>
                <div class="text-sm">
                  {{ $t('somethingSpecialFirstGuestsSaleTitle') }}
                </div>
              </v-col>
              <v-col md="2">
                <v-radio label="" value="true"></v-radio>
              </v-col>

              <v-col md="10">
                <div class="text-lg">
                  {{ $t('somethingSpecialFirstGuestsNotSale') }}
                </div>
                <div class="text-sm">
                  {{ $t('somethingSpecialFirstGuestsNotSaleTitle') }}
                </div>
              </v-col>
              <v-col md="2">
                <v-radio label="" value="false"></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
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
      radios: 'radio-1'
    }
  },
  computed: {
    ...mapGetters({
      specOffer: 'newLet/specOffer'
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
