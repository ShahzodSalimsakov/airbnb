<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">
            {{ $t('howEarlyShouldGuestsBookYourAccommodation') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-select
            :value="ReserveHouse"
            :items="arrReserveHouse"
            :placeholder="this.$t('chooseOneOption')"
            @change="(val) => changeData('ReserveHouse', val)"
          ></v-select>
          <div class="subtitle-2">
            <div style="color: dodgerblue;">{{ $t('advice') }}</div>
            {{ $t('howEarlyShouldGuestsBookYourAccommodationAdvice') }}
          </div>
        </v-card-text>

        <v-card-text>
          <hr />
        </v-card-text>
        <v-card-text>
          <h2 class="font-bold">
            {{ $t('whenCanGuestsArriveAtTheirAccommodation') }}
          </h2>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col md="6">
              {{ $t('arrivalWith') }}
              <v-select
                :value="reserveHouseHourFrom"
                :items="arrHour"
                :placeholder="this.$t('chooseTime')"
                @change="(val) => changeData('reserveHouseHourFrom', val)"
              ></v-select>
            </v-col>
            <v-col md="6">
              {{ $t('arrivalBefore') }}
              <v-select
                :value="reserveHouseHourUntil"
                :items="arrHour"
                :placeholder="this.$t('chooseTime')"
                @change="(val) => changeData('reserveHouseHourUntil', val)"
              ></v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      arrReserveHouse: [
        {
          text: 'В тот же день',
          value: 0
        },
        {
          text: '1 день',
          value: 1
        },
        {
          text: '2 дня',
          value: 2
        },
        {
          text: '3 дня',
          value: 3
        },
        {
          text: '7 дней',
          value: 7
        }
      ],
      arrHour: [
        'Гибкое',
        '8:00',
        '9:00',
        '10:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00'
      ]
    }
  },
  computed: {
    ...mapGetters({
      ReserveHouse: 'newLet/ReserveHouse',
      reserveHouseHourFrom: 'newLet/reserveHouseHourFrom',
      reserveHouseHourUntil: 'newLet/reserveHouseHourUntil'
    })
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    }
  }
}
</script>

<style scoped></style>
