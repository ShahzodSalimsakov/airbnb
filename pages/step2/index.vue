<template>
  <div>
    <template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Добавьте фото в объявление
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Расскажите гостям о жилье
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3">
            Создать название объявления
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 4" step="4">
            Добавьте фото профиля
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 5" step="5">
            Какие удобства вы предлагаете?
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 6" step="6">
            Ознакомиться с требованиями Airbnb к гостям
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 7" step="7">
            Определите для гостей правила дома
          </v-stepper-step>

          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <WizardPhotos />

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>

            <v-btn text>Назад</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <WizardDescription />

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 1">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <WizardTitle />

            <v-btn color="primary" @click="e1 = 4">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 2">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <WizardProfilePhoto />

            <v-btn color="primary" @click="e1 = 5">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 3">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <WizardVerifyPhone />

            <v-btn color="primary" @click="e1 = 6">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 4">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="6">
            <WizardQuestRequirements />

            <v-btn color="primary" @click="e1 = 7">
              Continue
            </v-btn>

            <v-btn text @click="e1 = 6">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <WizardQuestHouseRules />

            <v-btn text @click="e1 = 6">Назад</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
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
          label: this.$t('addPhotoToAd'),
          active: true
        },
        {
          label: this.$t('tellGuestsAboutLodging'),
          active: false
        },
        {
          label: this.$t('createAdName'),
          active: false
        },
        {
          label: this.$t('addProfilePhoto'),
          active: false
        },
        {
          label: this.$t('whatAmenitiesDoYouOffer'),
          active: false
        },
        {
          label: this.$t('viewAirbnbGuestRequirements'),
          active: false
        },
        {
          label: this.$t('defineHouseRulesForGuests'),
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
