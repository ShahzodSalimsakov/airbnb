<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="display-1">Вот как гости будут у вас бронировать</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">
              1.Соответствующие вашим требованиям гости находят ваше объявление
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              Для бронирования гости должны подтвердить свои контактные данные,
              указать платежную информацию и рассказать о своей поездке.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">
              2.Вы определяете круг гостей
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              Чтобы забронировать жилье в доступные даты без дополнительного
              запроса, гости должны будут соответствовать всем установленным
              требованиям и выразить согласие с правилами.
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              Чтобы забронировать жилье в доступные даты без дополнительного
              запроса, гости должны будут соответствовать всем установленным
              требованиям и выразить согласие с правилами.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-text class="text--primary">
            <div class="title">
              3.Мы уведомим вас, когда гость забронирует ваше жилье
            </div>
            <v-divider></v-divider>
            <div class="subtitle">
              Мы сразу же отправим вам подтверждение с указанием его цели
              поездки, времени приезда и его попутчиков.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto">
          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1"
                >Вы под надежной защитой</v-list-item-title
              >
              <v-list-item-subtitle
                >В тех редких случаях, когда возникают проблемы, Airbnb
                предоставляет круглосуточную поддержку пользователей, Гарантию
                для хозяев в $1 000 000 и возможность отмены без штрафа, если
                бронирование вас не устраивает.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WizardReviewHowGuestsBook'
}
</script>

<style scoped></style>
