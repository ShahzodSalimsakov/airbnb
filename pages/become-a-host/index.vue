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
        <WizardRoom />
      </template>
      <template v-else-if="activeStepIndex === 1">
        <WizardBedrooms />
      </template>
      <template v-else-if="activeStepIndex === 2">
        <WizardBathrooms />
      </template>
      <template v-else-if="activeStepIndex === 3">
        <WizardLocation />
      </template>
      <template v-else-if="activeStepIndex === 4">
        <WizardAmenities />
      </template>
      <template v-else-if="activeStepIndex === 5">
        <WizardSpaces />
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
import WizardRoom from '~/components/become-a-host/WizardRoom'
import WizardBedrooms from '~/components/become-a-host/WizardBedrooms'
import WizardBathrooms from '~/components/become-a-host/WizardBathrooms'
import WizardLocation from '~/components/become-a-host/WizardLocation'
import WizardAmenities from '~/components/become-a-host/WizardAmenities'
import WizardSpaces from '~/components/become-a-host/WizardSpaces'
export default {
  layout: 'wizard',
  components: {
    WizardRoom,
    WizardBedrooms,
    WizardBathrooms,
    WizardLocation,
    WizardAmenities,
    WizardSpaces
  },
  data() {
    return {
      steps: [
        {
          label: 'Какое жилье вы сдаете?',
          active: true
        },
        {
          label: 'Сколько гостей вмещает ваше жилье?',
          active: false
        },
        {
          label: 'Сколько ванных?',
          active: false
        },
        {
          label: 'Где находится ваше жилье?',
          active: false
        },
        {
          label: 'Какие удобства вы предлагаете?',
          active: false
        },
        {
          label: 'Какими помещениями гости могут пользоваться?',
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
