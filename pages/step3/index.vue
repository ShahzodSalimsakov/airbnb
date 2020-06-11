<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        1
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
        Насколько заранее гости могут бронировать?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">
        Насколько долго гости могут жить в вашем жилье?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 7" step="7">
        Обновите свой календарь
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 8" step="8">
        Назначьте цену за жилье
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 9" step="9">
        Кое-что особенное для первых гостей
      </v-stepper-step>

      <v-divider></v-divider>
      
      <v-stepper-step :complete="e1 > 11" step="11">
        Local laws
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
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
        <WizardAvailabilitySettingsDay />
        <v-btn color="primary" @click="e1 = 5">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 3">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <WizardAvailabilitySettingsMonth />
        <v-btn color="primary" @click="e1 = 6">
          Далее
        </v-btn>
        <v-btn text @click="e1 = 4">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="6">
        <WizardHowLongCanGuestsStay />
        <v-btn color="primary" @click="e1 = 7">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 5">Cancel</v-btn>
      </v-stepper-content>
      
      <v-stepper-content step="7">
        <WizardCalendar2 />
        <v-btn color="primary" @click="e1 = 7">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 6">Cancel</v-btn>
      </v-stepper-content>
      
      <v-stepper-content step="8">
        <WizardPrice />
        <v-btn color="primary" @click="e1 = 9">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 7">Назад</v-btn>
      </v-stepper-content>

      <v-stepper-content step="9">
        <WizardPromotion />
        <v-btn color="primary" @click="e1 = 10">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 8">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="10">
        <WizardAdditionalPricing />
        <v-btn color="primary" @click="e1 = 11">
          Continue
        </v-btn>
        <v-btn text @click="e1 = 9">Cancel</v-btn>
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
import WizardHowLongCanGuestsStay from '~/components/step-3/WizardHowLongCanGuestsStay'
import WizardCalendar from '~/components/step-3/WizardCalendar'
import WizardAnswerTwoQuestions from '~/components/step-3/WizardAnswerTwoQuestions'
import WizardAvailabilitySettingsDay from '~/components/step-3/WizardAvailabilitySettingsDay'
import WizardAvailabilitySettingsMonth from '~/components/step-3/WizardAvailabilitySettingsMonth'
import WizardCalendar2 from '~/components/step-3/WizardCalendar2'
import WizardPrice from '~/components/step-3/WizardPrice'
import WizardPromotion from '~/components/step-3/WizardPromotion'
import WizardAdditionalPricing from '~/components/step-3/WizardAdditionalPricing'
import WizardReviewHowGuestsBook from '~/components/step-3/WizardReviewHowGuestsBook'
import WizardLocalLaws from '~/components/step-3/WizardLocalLaws'
export default {
  components: {
    WizardAnswerTwoQuestions,
    WizardCalendar,
    WizardAvailabilitySettingsDay,
    WizardAvailabilitySettingsMonth,
    WizardPrice,
    WizardPromotion,
    WizardCalendar2,
    WizardAdditionalPricing
    WizardReviewHowGuestsBook,
    WizardLocalLaws,
    WizardHowLongCanGuestsStay
  },
  data() {
    return { e1: 1 }
  },
  layout: 'wizard'
}
</script>

<style scoped></style>
