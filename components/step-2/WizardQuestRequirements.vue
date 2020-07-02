<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            {{ $t('viewAirbnbGuestRequirements') }}
          </div>
          <div class="body-2">
            {{ $t('viewAirbnbGuestRequirementsTitle') }}
          </div>
        </v-card-text>

        <v-card-text>
          <div class="title">
            {{ $t('allAirbnbGuestsMustSubmitTheFollowing') }}:
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('emailAddress') }}
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('phoneNumberVerified') }}
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('billinginformation') }}
          </div>
        </v-card-text>

        <v-card-text>
          <div class="title">
            {{ $t('beforeBookingYourAccommodationGuestsMust') }}:
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('takeYourRulesAtHome') }}
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('sendYouAMessageAboutYourTrip') }}
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            {{ $t('warnAboutTheNumberOfVisitors') }}
          </div>

          <div class="subtitle-1">
            <v-icon left color="success" style="height: 100%;"
              >mdi-check</v-icon
            >
            {{ $t('confirmArrivalTime') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-btn class="ma-2" depressed @click="addOtherReq = !addOtherReq">
            {{ $t('addOtherRequirements') }}
          </v-btn>
        </v-card-text>
        <div v-if="addOtherReq === true">
          <v-card-text>
            <v-checkbox
              :label="$t('officialID')"
              :value="$t('officialID')"
            ></v-checkbox>
            <v-checkbox
              :label="$t('noBadReviews')"
              :value="$t('noBadReviews')"
            ></v-checkbox>

            <div class="caption">
              {{ $t('moreRequirementsLessBookings') }}
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      addOtherReq: false
    }
  }
}
</script>
