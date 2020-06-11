<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Цены с учетом срока проживания</div>
          <div class="body-2">
            Предложите гостям скидку, чтобы они бронировали ваше жилье на более
            долгий срок.
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            Скидка за неделю
          </div>
          <v-text-field
            v-model="week"
            suffix="% скидки"
            value="0"
            v-mask="mask"
          ></v-text-field>
          <v-btn text @click="week = 21">Совет: 21%</v-btn>
          <div class="caption">
            Путешественники часто ориентируются на цену. Чтобы повысить
            вероятность бронирования на неделю, попробуйте предложить скидку.
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            Скидка за месяц
          </div>
          <v-text-field
            v-model="month"
            suffix="% скидки"
            value="0"
            v-mask="mask"
          ></v-text-field>
          <v-btn text @click="month = 49">Совет: 49%</v-btn>
          <div class="caption">
            Большинство людей, бронирующих жилье на месяц и более, ожидают
            скидки больше 25%.
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  directives: {
    mask
  },
  data() {
    return {
      week: 0,
      month: 0,
      mask: '##'
    }
  }
}
</script>
