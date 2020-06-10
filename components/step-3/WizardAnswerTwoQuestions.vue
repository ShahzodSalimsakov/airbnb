<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <h2>Ответьте на два вопроса, прежде чем перейти к настройкам</h2>
        </v-card-text>
        <v-card-text>
          <v-select
            v-model="rentedHouse"
            :items="arrRentedHouse"
            label="Вы когда-нибудь уже сдавали жилье?"
            placeholder="Выберите 1 вариант"
          ></v-select>
          <v-select
            v-model="receiveGuests"
            :items="arrReceiveGuests"
            label="Как часто вы хотите принимать гостей?"
            placeholder="Выберите 1 вариант"
          ></v-select>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WizardAnswerTwoQuestions',
  data() {
    return {
      rentedHouse: '',
      receiveGuests: '',
      arrRentedHouse: ['Я делаю это впервые', 'Опыт есть'],
      arrReceiveGuests: ['Часть времени', 'Как можно чаще']
    }
  }
}
</script>

<style scoped></style>
