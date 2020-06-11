<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Кое-что особенное для первых гостей</div>
        </v-card-text>
        <v-card-text>
          <v-radio-group v-model="radios" :mandatory="false">
            <v-row>
              <v-col md="10" class="subtitle-2">
                Предложите первым гостям скидку 20% РЕКОМЕНДУЕМ Первые гости
                (3), которые забронируют ваше жилье, получат скидку 20% за ночь.
                Специальное предложение привлечет гостей, и вы получите
                необходимое число отзывов (3) для присвоения рейтинга.
              </v-col>
              <v-col md="2">
                <v-radio label="" value="radio-1"></v-radio>
              </v-col>

              <v-col md="10" class="subtitle-2">
                Не добавлять специальное предложение После публикации объявления
                добавить предложение нельзя.
              </v-col>
              <v-col md="2">
                <v-radio label="" value="radio-2"></v-radio>
              </v-col>
            </v-row>
          </v-radio-group>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      radios: 'radio-1'
    }
  }
}
</script>
