<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="wizard-title">
      <span class="block pl-10 py-2 text-4xl"
        >{{ activeStepIndex + 1 }}. {{ activeTitle }}</span
      >
      <v-progress-linear v-model="stepsProgress" height="5"></v-progress-linear>
    </div>
    <div class="overflow-x-hidden steps-content py-10 bg-gray-300">
      <v-overlay :value="isStepLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <template v-if="activeStepIndex === 0">
        <WizardReviewHowGuestsBook />
      </template>
      <template v-else-if="activeStepIndex === 1">
        <WizardCalendar />
      </template>
      <template v-else-if="activeStepIndex === 2">
        <WizardAnswerTwoQuestions />
      </template>
      <template v-else-if="activeStepIndex === 3">
        <WizardAvailabilitySettingsDay />
      </template>
      <template v-else-if="activeStepIndex === 4">
        <WizardAvailabilitySettingsMonth />
      </template>
      <template v-else-if="activeStepIndex === 5">
        <WizardHowLongCanGuestsStay />
      </template>
      <template v-else-if="activeStepIndex === 6">
        <WizardCalendar2 />
      </template>
      <template v-else-if="activeStepIndex === 7">
        <WizardPrice />
      </template>
      <template v-else-if="activeStepIndex === 8">
        <WizardPromotion />
      </template>
      <template v-else-if="activeStepIndex === 9">
        <WizardAdditionalPricing />
      </template>
      <template v-else-if="activeStepIndex === 10">
        <WizardLocalLaws />
      </template>
    </div>
    <div
      class="border-t-2 elevation-10 flex justify-evenly py-3 steps-pagination"
    >
      <v-btn
        color="primary"
        :disabled="activeStepIndex === 0"
        @click="goToPrev"
      >
        {{ $t('preview') }}
      </v-btn>
      <v-btn color="primary" :loading="isStepLoading" @click="goToNext">
        {{ $t('continue') }}
      </v-btn>
    </div>
  </div>
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
  layout: 'wizard',
  name: 'ThirdStepWizard',
  components: {
    WizardAnswerTwoQuestions,
    WizardCalendar,
    WizardAvailabilitySettingsDay,
    WizardAvailabilitySettingsMonth,
    WizardPrice,
    WizardPromotion,
    WizardCalendar2,
    WizardAdditionalPricing,
    WizardReviewHowGuestsBook,
    WizardLocalLaws,
    WizardHowLongCanGuestsStay
  },
  data() {
    return {
      steps: [
        {
          label: this.$t('thisIsHowGuestsWillBookWithYou'),
          active: true
        },
        {
          label: this.$t('successfulReceptionBeginsWithReliableCalendar'),
          active: false
        },
        {
          label: this.$t('answerTwoQuestionsBeforeMovingSettings'),
          active: false
        },
        {
          label: this.$t('howEarlyShouldGuestsBookYourAccommodation'),
          active: false
        },
        {
          label: this.$t('howEarlyCanGuestsBook'),
          active: false
        },
        {
          label: this.$t('howLongCanGuestsStayYourAccommodation'),
          active: false
        },
        {
          label: this.$t('updateYourCalendar'),
          active: false
        },
        {
          label: this.$t('setPriceHousing'),
          active: false
        },
        {
          label: this.$t('somethingSpecialFirstGuests'),
          active: false
        },
        {
          label: this.$t('pricesBasedLengthStay'),
          active: false
        },
        {
          label: this.$t('localLawsTaxes'),
          active: false
        }
      ],
      e1: 1,
      isStepLoading: false
    }
  },
  computed: {
    activeTitle() {
      return this.steps.filter((item) => item.active)[0].label
    },
    activeStepIndex() {
      return this.steps.findIndex((item) => item.active)
    },
    stepsProgress() {
      const currentIndex = this.steps.findIndex((item) => item.active)
      return parseInt(((currentIndex + 1) / this.steps.length) * 100, 0)
    }
  },
  methods: {
    goToNext() {
      let currentIndex = this.steps.findIndex((item) => item.active)
      this.steps[currentIndex].active = false
      if (currentIndex < this.steps.length - 1) {
        currentIndex++
        this.steps[currentIndex].active = true
      }
    },
    goToPrev() {
      let currentIndex = this.steps.findIndex((item) => item.active)
      this.steps[currentIndex].active = false
      if (currentIndex > 0) {
        currentIndex--
        this.steps[currentIndex].active = true
      }
    }
  }
}
</script>

<style scoped>
.steps-content {
  flex: 9;
}
.steps-pagination {
  flex: 0;
}
</style>
