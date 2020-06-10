<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <h2>Насколько заранее гости должны бронировать ваше жилье?</h2>
        </v-card-text>
        <v-card-text>
          <v-select
            v-model="rentedHouse"
            :items="arrRentedHouse"
            placeholder="Выберите 1 вариант"
          ></v-select>
          <div class="subtitle-2">
            <div style="color: dodgerblue;">Совет.</div>
            Если бронирование планируется не менее чем за 2 дня до прибытия, то
            вы сможете лучше подготовиться к прибытию гостя, но можете упустить
            бронирования, сделанные в последний момент.
          </div>
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
      arrRentedHouse: ['В тот же день', '1 день', '2 дня', '3 дня', '7 дней']
    }
  }
}
</script>

<style scoped></style>
