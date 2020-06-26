<template>
  <v-container fluid>
    <v-row class="row">
      <v-text-field
        v-model="location"
        :label="$t('location')"
        :placeholder="$t('whereAreYouGoing')"
        class="px-4 w-3/12"
        outlined
      />
      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :value="computedDateFormattedMoment"
            :label="$t('arrivalAndDeparture')"
            readonly
            :placeholder="$t('when')"
            v-bind="attrs"
            class="px-4 col-4"
            outlined
            allowed-dates
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="arrivalAndDepartureDate"
          locale="ru"
          show-current
          :min="minDate"
          range
          no-title
          @input="menu1 = false"
        >
        </v-date-picker>
      </v-menu>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="100"
        offset-y
        auto
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            :label="$t('numberOfGuests')"
            :placeholder="$t('howManyGuests')"
            class="px-4 col-3"
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-card class="divide-y divide-gray-400">
          <div class="flex justify-around p-2">
            <div class="w-1/3">
              <div class="font-black">{{ $t('adults') }}</div>
              <div>{{ $t('ageFrom') }} 13</div>
            </div>
            <DecrementIncrement class="pt-2" />
          </div>
          <div class="flex justify-around p-2">
            <div class="w-1/3">
              <div class="font-black">{{ $t('children') }}</div>
              <div>{{ $t('ageFrom') }} 2—12</div>
            </div>
            <DecrementIncrement class="pt-2" />
          </div>
          <div class="flex justify-around p-2">
            <div class="w-1/3">
              <div class="font-black">{{ $t('babies') }}</div>
              <div v-if="this.$route.path === '/uz'">2 {{ $t('upTo') }}</div>
              <div v-else>{{ $t('upTo') }} 2</div>
            </div>
            <DecrementIncrement class="pt-2" />
          </div>
        </v-card>
      </v-menu>
      <v-btn color="error" class="ma-2 white--text">
        {{ $t('search') }}
        <v-icon right dark>mdi-magnify</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import DecrementIncrement from '~/components/DecrementIncrement'
moment.locale('ru')
export default {
  name: 'Housing',
  components: { DecrementIncrement },
  data() {
    return {
      adult: 0,
      children: 0,
      babies: 0,
      location: '',
      minDate: new Date().toISOString().substr(0, 10),
      arrivalAndDepartureDate: [new Date().toISOString().substr(0, 10)],
      departureDate: '',
      menu1: false,
      menu2: false,
      menu: false
    }
  },
  computed: {
    computedDateFormattedMoment() {
      const arrival = this.arrivalAndDepartureDate
      return Array.isArray(arrival)
        ? arrival
            .sort()
            .map((item) => moment(item, '').format('D MMM'))
            .join(' - ')
        : ''
    }
  }
}
</script>

<style scoped></style>
