<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="display-1">{{ $t('thisIsHowGuestsWillBookWithYou') }}</div>
      </v-col>
    </v-row>
    <v-row class="flex flex-wrap">
      <v-col cols="4" class="flex">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">
              1.{{ $t('guestsMatchingYourRequirementsFindYourAd') }}
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              {{ $t('guestsMatchingYourRequirementsFindYourAdTitle') }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="flex">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">2.{{ $t('youDefineCircleGuests') }}</div>
            <v-divider></v-divider>
            <div class="subtitle">
              {{ $t('youDefineCircleGuestsTitle') }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4" class="flex">
        <v-card class="mx-auto">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">
              3.{{ $t('weWillNotifyYouWhenGuestMakesReservation') }}
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              {{ $t('weWillNotifyYouWhenGuestMakesReservationTitle') }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WizardReviewHowGuestsBook'
}
</script>

<style scoped></style>
