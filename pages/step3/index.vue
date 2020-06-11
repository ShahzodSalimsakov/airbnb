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
        Насколько долго гости могут жить в вашем жилье?
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <WizardReviewHowGuestsBook />
        <v-btn color="primary" @click="e1 = 2">
          Далее
        </v-btn>
        <v-btn text>Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <WizardCalendar />
        <v-btn color="primary" @click="e1 = 3">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 1">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <WizardAnswerTwoQuestions />
        <v-btn color="primary" @click="e1 = 4">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 2">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <WizardAvailabilitySettings />
        <v-btn color="primary" @click="e1 = 5">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 3">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <WizardHowLongCanGuestsStay />
        <v-btn color="primary" @click="e1 = 6">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 4">Назад</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import WizardReviewHowGuestsBook from '~/components/step-3/WizardReviewHowGuestsBook'
import WizardCalendar from '~/components/step-3/WizardCalendar'
import WizardAnswerTwoQuestions from '~/components/step-3/WizardAnswerTwoQuestions'
import WizardAvailabilitySettings from '~/components/step-3/WizardAvailabilitySettings'
import WizardHowLongCanGuestsStay from '~/components/step-3/WizardHowLongCanGuestsStay'
export default {
  components: {
    WizardHowLongCanGuestsStay,
    WizardAnswerTwoQuestions,
    WizardCalendar,
    WizardReviewHowGuestsBook,
    WizardAvailabilitySettings
  },
  data() {
    return { e1: 1 }
  },
  layout: 'wizard'
}
</script>

<style scoped></style>
