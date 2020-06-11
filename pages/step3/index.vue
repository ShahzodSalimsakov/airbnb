<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        review-how-guests-book
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Успешный прием гостей начинается с надежного календаря
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Ответьте на два вопроса, прежде чем перейти к настройкам
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        Насколько заранее гости должны бронировать ваше жилье?
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

      <v-stepper-step :complete="e1 > 7" step="7">
        Calendar2
      </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 11" step="11">
        Local laws
      </v-stepper-step>

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
        <WizardCalendar />
        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <WizardAnswerTwoQuestions />
        <v-btn color="primary" @click="e1 = 4">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 2">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <WizardAvailabilitySettings />
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

      <v-stepper-content step="7">
        <WizardCalendar2 />
        <v-btn color="primary" @click="e1 = 7">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 6">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="11">
        <WizardLocalLaws />
        <v-btn color="primary" @click="e1 = 11">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 10">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import WizardReviewHowGuestsBook from '~/components/step-3/WizardReviewHowGuestsBook'
import WizardCalendar from '~/components/step-3/WizardCalendar'
import WizardAnswerTwoQuestions from '~/components/step-3/WizardAnswerTwoQuestions'
import WizardAvailabilitySettings from '~/components/step-3/WizardAvailabilitySettings'
import WizardCalendar2 from '~/components/step-3/WizardCalendar2'
import WizardLocalLaws from '~/components/step-3/WizardLocalLaws'
export default {
  components: {
    WizardAnswerTwoQuestions,
    WizardCalendar,
    WizardReviewHowGuestsBook,
    WizardAvailabilitySettings,
    WizardCalendar2,
    WizardLocalLaws
  },
  data() {
    return { e1: 11 }
  },
  layouts: 'wizard'
}
</script>

<style scoped></style>
