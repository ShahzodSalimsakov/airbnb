<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">
        Какое жилье вы сдаете?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">
        Сколько гостей вмещает ваше жилье?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">
        Сколько ванных?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">
        Где находится ваше жилье?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 5" step="5">
        Какие удобства вы предлагаете?
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 6" step="6">
        Какими помещениями гости могут пользоваться?
      </v-stepper-step>

      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <WizardRoom />
        <v-btn color="primary" @click="e1 = 2">
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <WizardBedrooms />

        <v-btn color="primary" @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <WizardBathrooms />

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
        <WizardAmenities />

        <v-btn color="primary" @click="e1 = 6">
          Continue
        </v-btn>

        <v-btn text @click="e1 = 4">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="6">
        <WizardSpaces />

        <v-btn text @click="e1 = 5">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import WizardRoom from '~/components/become-a-host/WizardRoom'
import WizardBedrooms from '~/components/become-a-host/WizardBedrooms'
import WizardBathrooms from '~/components/become-a-host/WizardBathrooms'
import WizardLocation from '~/components/become-a-host/WizardLocation'
import WizardAmenities from '~/components/become-a-host/WizardAmenities'
import WizardSpaces from '~/components/become-a-host/WizardSpaces'
export default {
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
      e1: 1
    }
  },
  layout: 'wizard'
}
</script>

<style scoped></style>
