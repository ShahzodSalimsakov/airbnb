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
            v-model="reserveHouse"
            :items="arrReserveHouse"
            placeholder="Выберите 1 вариант"
          ></v-select>
          <div v-if="reserveHouse === 'Даты недоступны по умолчанию'">
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
export default {
  data() {
    return {
      reserveHouse: '',
      arrReserveHouse: [
        'В любое время',
        'За 3 месяца',
        'За 6 месяца',
        'За 9 месяца',
        '1 год',
        'Даты недоступны по умолчанию'
      ]
    }
  }
}
</script>

<style scoped></style>
