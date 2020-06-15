<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <h2>Ответьте на два вопроса, прежде чем перейти к настройкам</h2>
        </v-card-text>
        <v-card-text>
          <v-select
            :value="rentedHouse"
            :items="arrRentedHouse"
            label="Вы когда-нибудь уже сдавали жилье?"
            placeholder="Выберите 1 вариант"
            @change="(val) => changeData('rentedHouse', val)"
          ></v-select>
          <v-select
            :value="receiveGuests"
            :items="arrReceiveGuests"
            label="Как часто вы хотите принимать гостей?"
            placeholder="Выберите 1 вариант"
            @change="(val) => changeData('receiveGuests', val)"
          ></v-select>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WizardAnswerTwoQuestions',
  data() {
    return {
      arrRentedHouse: ['Я делаю это впервые', 'Опыт есть'],
      arrReceiveGuests: ['Часть времени', 'Как можно чаще']
    }
  },
  computed: {
    ...mapGetters({
      rentedHouse: 'newLet/rentedHouse',
      receiveGuests: 'newLet/receiveGuests'
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
