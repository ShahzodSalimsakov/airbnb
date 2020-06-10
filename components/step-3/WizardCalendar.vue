<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <h2>Успешный прием гостей начинается с надежного календаря</h2>
          <div class="pt-2">
            Гости будут мгновенно бронировать доступные дни. Чтобы получать
            бронирования только тогда, когда вы можете принять гостей, постоянно
            обновляйте календарь и настройки доступности. Отмены нарушают планы
            гостей. Если вы отменяете бронирование из-за ошибки в календаре, мы
            оштрафуем вас и заблокируем соответствующие даты.
          </div>
          <v-checkbox
            v-model="upToDate"
            label="Ясно! Буду регулярно обновлять календарь."
          ></v-checkbox>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WizardCalendar',
  data() {
    return {
      upToDate: false
    }
  }
}
</script>

<style scoped></style>
