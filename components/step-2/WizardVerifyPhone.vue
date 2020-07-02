<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">
            {{ $t('addMobileNumber') }}
          </div>
          <div class="body-2">
            {{ $t('addMobileNumberTitle') }}
          </div>
          <v-select
            :value="selectedCode"
            :items="arrCountryCode"
            @change="(val) => changeData('selectedCode', val)"
          />
          <div>
            <span v-if="selectedCode" class="d-inline">{{
              getPhoneCode.code
            }}</span>
            <v-text-field
              :value="phoneNumber"
              class="d-inline-block"
              @change="(val) => changeData('phoneNumber', val)"
            ></v-text-field>
            <v-btn>
              {{ $t('submit') }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WizardVerifyPhone',
  data: () => ({
    arrCountryCode: [
      {
        value: 'UZ',
        text: 'Узбекистан (+998)',
        code: '+998'
      },
      {
        value: 'KN',
        text: 'Конго (+242)',
        code: '+242'
      },
      {
        value: 'AZ',
        text: 'Азербайджан (+994)',
        code: '+994'
      }
    ]
  }),
  computed: {
    ...mapGetters({
      selectedCode: 'newLet/selectedCode',
      phoneNumber: 'newLet/phoneNumber'
    }),
    getPhoneCode() {
      return [...this.arrCountryCode].filter(
        (item) => item.value === this.selectedCode
      )[0]
    }
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

<style scoped></style>
