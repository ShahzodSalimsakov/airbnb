<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">
            {{ $t('successfulReceptionBeginsWithReliableCalendar') }}
          </div>
          <div class="pt-2">
            {{ $t('successfulReceptionBeginsWithReliableCalendarTitle') }}
          </div>
          <v-checkbox
            :value="upToDate"
            :label="this.$t('gotItIWillRegularlyUpdateCalendar')"
            @change="(val) => changeData('upToDate', val)"
          ></v-checkbox>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WizardCalendar',
  computed: {
    ...mapGetters({
      upToDate: 'newLet/upToDate'
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

<style scoped></style>
