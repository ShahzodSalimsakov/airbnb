<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('lengthOfStayPrices') }}</div>
          <div class="body-2">
            {{ $t('encourageTravellersToBookLongerStaysByOfferingADiscount') }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            {{ $t('weeklyDiscount') }}
          </div>
          <v-text-field
            v-mask="mask"
            :value="discontWeek"
            :suffix="$t('percentDiscount')"
            @change="(val) => changeData('discontWeek', val)"
          ></v-text-field>
          <v-btn text @click="week = 21">{{ $t('tip21') }}</v-btn>
          <div class="caption">
            {{ $t('travellersOftenSearchByPrice') }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            {{ $t('monthlyDiscount') }}
          </div>
          <v-text-field
            v-mask="mask"
            :value="discontMonth"
            :suffix="$t('percentDiscount')"
            @change="(val) => changeData('discontMonth', val)"
          ></v-text-field>
          <v-btn text @click="month = 49">{{ $t('tip49') }}</v-btn>
          <div class="caption">
            {{ $t('mostTravellersStayingLonger') }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { mask } from 'vue-the-mask'
export default {
  directives: {
    mask
  },
  data() {
    return {
      month: 0,
      mask: '##'
    }
  },
  computed: {
    ...mapGetters({
      discontWeek: 'newLet/discontWeek',
      discontMonth: 'newLet/discontMonth'
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
