<template>
  <div>
    <template>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"
            >Какое жилье вы сдаете?</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"
            >Name of step 2</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3"
            >Name of step 3</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="4">Name of step 4</v-stepper-step>
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

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <WizardBathrooms />

            <v-btn color="primary" @click="e1 = 4">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <WizardLocation />

            <v-btn color="primary" @click="e1 = 5">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="5">
            <WizardAmenities />

            <v-btn color="primary" @click="e1 = 6">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="6">
            <WizardSpaces />

            <v-btn color="primary" @click="e1 = 7">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="7">
            <WizardPhotos />

            <v-btn color="primary" @click="e1 = 8">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="8">
            <v-btn color="primary" @click="e1 = 9">
              Continue
            </v-btn>

            <v-btn text>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </template>
  </div>
</template>

<script>
import WizardRoom from '~/components/become-a-host/WizardRoom'
import WizardBedrooms from '~/components/become-a-host/WizardBedrooms'
import WizardBathrooms from '~/components/become-a-host/WizardBathrooms'
import WizardLocation from '~/components/become-a-host/WizardLocation'
import WizardAmenities from '~/components/become-a-host/WizardAmenities'
import WizardSpaces from '~/components/become-a-host/WizardSpaces'
import WizardPhotos from '~/components/become-a-host/WizardPhotos'
export default {
  components: {
    WizardRoom,
    WizardBedrooms,
    WizardBathrooms,
    WizardLocation,
    WizardAmenities,
    WizardSpaces,
    WizardPhotos
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
