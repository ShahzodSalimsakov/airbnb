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
        Где находится ваше жилье?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">
        Добавьте номер мобильного телефона
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">
        Какими помещениями гости могут пользоваться?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <WizardPhotos />

        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <WizardDescription />

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <WizardTitle />

        <v-btn color="primary" @click="e1 = 4">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 2">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="4">
        <WizardLocation />

        <v-btn color="primary" @click="e1 = 5">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 3">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="5">
        <WizardVerifyPhone />

        <v-btn color="primary" @click="e1 = 6">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 4">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import WizardPhotos from '~/components/step-2/WizardPhotos'
import WizardDescription from '~/components/step-2/WizardDescription'
import WizardTitle from '~/components/step-2/WizardTitle'
import WizardVerifyPhone from '~/components/step-2/WizardVerifyPhone'

export default {
  components: {
    WizardVerifyPhone,
    WizardPhotos,
    WizardDescription,
    WizardTitle
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
