<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        review-how-guests-book
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        3
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        4
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">
        5
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">
        6
      </v-stepper-step>

      <v-divider></v-divider>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <WizardReviewHowGuestsBook />
        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-btn color="primary" @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 2">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <v-btn color="primary" @click="e1 = 5">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 3">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <v-btn color="primary" @click="e1 = 6">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 4">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import WizardReviewHowGuestsBook from '~/components/step-3/WizardReviewHowGuestsBook'

export default {
  components: {
    WizardReviewHowGuestsBook
  },
  data() {
    return {
      e1: 1
    }
  },
  layouts: 'wizard'
}
</script>

<style scoped></style>
