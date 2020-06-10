<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            Ознакомиться с требованиями Airbnb к гостям
          </div>
          <div class="body-2">
            Для бронирования жилья на Airbnb гости должны соответствовать
            определенным требованиям.
          </div>
        </v-card-text>

        <v-card-text>
          <div class="title">
            Все гости Airbnb должны представить следующее:
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Адрес электронной почты
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Номер телефона подтвержден
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Платежная информация
          </div>
        </v-card-text>

        <v-card-text>
          <div class="title">
            Перед бронированием вашего жилья гости должны:
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Принять ваши правила дома
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Отправить вам сообщение о своей поездке
          </div>

          <div class="subtitle-1">
            <v-icon left color="success">mdi-check</v-icon>
            Предупредить о количестве приезжающих
          </div>

          <div class="subtitle-1">
            <v-icon left color="success" style="height: 100%;"
              >mdi-check</v-icon
            >
            Подтвердить время приезда, если он планируется в ближайшие 2 дня
          </div>
        </v-card-text>
        <v-card-text>
          <v-btn class="ma-2" depressed @click="addOtherReq = !addOtherReq"
            >Добавить другие требования</v-btn
          >
        </v-card-text>
        <div v-if="addOtherReq === true">
          <v-card-text>
            <v-checkbox
              label="Официальное удостоверение личности, отправленное в Airbnb"
              value="Официальное удостоверение личности, отправленное в Airbnb"
            ></v-checkbox>
            <v-checkbox
              label="Рекомендовано другими хозяевами, нет плохих отзывов"
              value="Рекомендовано другими хозяевами, нет плохих отзывов"
            ></v-checkbox>

            <div class="caption">
              Больше требований — меньше бронирований.
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
