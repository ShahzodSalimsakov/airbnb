<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="wizard-title">
      <span class="block pl-10 py-2 text-4xl"
        >{{ activeStepIndex + 1 }}. {{ activeTitle }}</span
      >
      <v-progress-linear v-model="stepsProgress" height="5"></v-progress-linear>
    </div>
    <div class="overflow-x-hidden steps-content py-10">
      <v-overlay :value="isStepLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <template v-if="activeStepIndex === 0">
        <WizardPhotos />
      </template>
      <template v-else-if="activeStepIndex === 1">
        <WizardDescription />
      </template>
      <template v-else-if="activeStepIndex === 2">
        <WizardTitle />
      </template>
      <template v-else-if="activeStepIndex === 3">
        <WizardProfilePhoto />
      </template>
      <template v-else-if="activeStepIndex === 4">
        <WizardVerifyPhone />
      </template>
      <template v-else-if="activeStepIndex === 5">
        <WizardQuestRequirements />
      </template>
      <template v-else-if="activeStepIndex === 6">
        <WizardQuestHouseRules />
      </template>
    </div>
    <div
      class="border-t-2 elevation-10 flex justify-evenly py-3 steps-pagination"
    >
      <v-btn color="primary" :disabled="activeStepIndex === 0" @click="goToPrev"
        >Prev</v-btn
      >
      <v-btn color="primary" :loading="isStepLoading" @click="goToNext">
        Continue
      </v-btn>
    </div>
  </div>
</template>

<script>
import WizardPhotos from '~/components/step-2/WizardPhotos'
import WizardDescription from '~/components/step-2/WizardDescription'
import WizardTitle from '~/components/step-2/WizardTitle'
import WizardProfilePhoto from '~/components/step-2/WizardProfilePhoto'
import WizardVerifyPhone from '~/components/step-2/WizardVerifyPhone'
import WizardQuestRequirements from '~/components/step-2/WizardQuestRequirements'
import WizardQuestHouseRules from '~/components/step-2/WizardQuestHouseRules'
export default {
  layout: 'wizard',
  components: {
    WizardPhotos,
    WizardDescription,
    WizardTitle,
    WizardProfilePhoto,
    WizardVerifyPhone,
    WizardQuestRequirements,
    WizardQuestHouseRules
  },
  data() {
    return {
      steps: [
        {
          label: 'Добавьте фото в объявление',
          active: true
        },
        {
          label: 'Расскажите гостям о жилье',
          active: false
        },
        {
          label: 'Создать название объявления',
          active: false
        },
        {
          label: 'Добавьте фото профиля',
          active: false
        },
        {
          label: 'Какие удобства вы предлагаете?',
          active: false
        },
        {
          label: 'Ознакомиться с требованиями Airbnb к гостям',
          active: false
        },
        {
          label: 'Определите для гостей правила дома',
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
