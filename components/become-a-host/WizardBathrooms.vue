<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">{{ $t('HowManyBathrooms') }}</div>
          <div class="body-2">{{ $t('HowManyBathroomTitle') }}</div>
        </v-card-text>
        <v-card-text>
          <v-alert type="error" v-show="showRequiredError" ref="errorBlock">
            <span
              v-html="submitErrorText ? submitErrorText : $t('fillFields')"
            ></span>
          </v-alert>
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col md="6">
                <h3 class="headline">
                  {{ $t('AmountOfBathrooms') }}
                </h3>
              </v-col>
              <v-col md="2">
                <v-text-field
                  :value="bathCount"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px;"
                  @change="(val) => changeData('bathCount', val)"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import wizardStepSubmit from '~/mixins/wizardStepSubmit'
export default {
  mixins: [wizardStepSubmit],
  data: () => ({
    step: '1_3'
  }),
  computed: {
    ...mapGetters({
      bathCount: 'newLet/bathCount'
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
        bathCount: this.bathCount
      }
    }
  }
}
</script>
<style></style>
