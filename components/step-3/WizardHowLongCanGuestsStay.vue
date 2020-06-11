<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            Насколько долго гости могут жить в вашем жилье?
          </div>
          <div class="d-flex">
            <div class="d-inline">
              <div class="d-inline-block">
                <v-text-field
                  v-model="nightsMin"
                  type="number"
                  min="0"
                  placeholder="ночей минимум"
                  @input="minCheckDisable"
                />
              </div>
              <v-btn
                :disabled="minDisabledButton"
                rounded
                @click="nightsMinDecrement"
                >-</v-btn
              >
              <v-btn rounded @click="nightsMinIncrement">+</v-btn>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-inline">
              <div class="d-inline-block">
                <v-text-field
                  v-model="nightsMax"
                  type="number"
                  min="0"
                  placeholder="ночей максимум"
                  @input="maxCheckDisable"
                />
              </div>
              <v-btn
                :disabled="maxDisabledButton"
                rounded
                @click="nightsMaxDecrement"
                >-</v-btn
              >
              <v-btn rounded @click="nightsMaxIncrement">+</v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WizardHowLongCanGuestsStay',
  data: () => ({
    nightsMin: '',
    nightsMax: '',
    minDisabledButton: null,
    maxDisabledButton: null
  }),
  methods: {
    nightsMinIncrement() {
      this.nightsMin++
      this.minDisabledButton = false
    },
    nightsMinDecrement() {
      if (this.nightsMin > 0) {
        this.minDisabledButton = false
        this.nightsMin--
      }

      if (this.nightsMin === 0) {
        this.minDisabledButton = true
      }
    },
    nightsMaxIncrement() {
      this.nightsMax++
      this.maxDisabledButton = false
    },
    nightsMaxDecrement() {
      if (this.nightsMax > 0) {
        this.maxDisabledButton = false
        this.nightsMax--
      }

      if (this.nightsMax === 0) {
        this.maxDisabledButton = true
      }
    },
    minCheckDisable() {
      if (this.nightsMin <= 0) {
        this.minDisabledButton = true
      } else {
        this.minDisabledButton = false
      }
    },
    maxCheckDisable() {
      if (this.nightsMin <= 0) {
        this.maxDisabledButton = true
      } else {
        this.maxDisabledButton = false
      }
    }
  }
}
</script>

<style scoped></style>
