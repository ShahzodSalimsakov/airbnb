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

            <v-btn text @click="e1 = 5">Назад</v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <WizardQuestHouseRules />

            <v-btn text @click="e1 = 6">Назад</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
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
      e1: 1
    }
  },
  layout: 'wizard'
}
</script>

<style scoped></style>
