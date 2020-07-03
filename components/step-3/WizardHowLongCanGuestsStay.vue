<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            {{ $t('howLongCanGuestsStayYourAccommodation') }}
          </div>
          <IncrementDecrement :label="$t('nightsMinimum')" />
          <IncrementDecrement :label="$t('nightsMaximum')" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import IncrementDecrement from '~/components/inputs/IncrementDecrement'
export default {
  name: 'WizardHowLongCanGuestsStay',
  components: {
    IncrementDecrement
  },
  data: () => ({
    nightsMin: '',
    nightsMax: ''
  }),
  methods: {}
}
</script>

<style scoped></style>
