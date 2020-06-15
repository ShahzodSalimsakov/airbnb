<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">
            Насколько заранее гости должны бронировать ваше жилье?
          </div>
        </v-card-text>
        <v-card-text>
          <v-select
            :value="reserveHouseMonth"
            :items="arrReserveHouse"
            placeholder="Выберите 1 вариант"
            @change="(val) => changeData('reserveHouseMonth', val)"
          ></v-select>
          <div v-if="reserveHouseMonth === 'Даты недоступны по умолчанию'">
            Календарь будет заблокирован по умолчанию. Чтобы принимать гостей,
            вам придется разблокировать даты вручную.
          </div>
        </v-card-text>
        <v-card-text>
          <div class="subtitle-2">
            <div style="color: dodgerblue;">Совет.</div>
            Во избежание отмены или отклонения заявок гостей, разблокируйте
            только те даты, в которые вы готовы их принять.
          </div>
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
        'В любое время',
        'За 3 месяца',
        'За 6 месяца',
        'За 9 месяца',
        '1 год',
        'Даты недоступны по умолчанию'
      ]
    }
  },
  computed: {
    ...mapGetters({
      reserveHouseMonth: 'newLet/reserveHouseMonth'
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
