<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Какие удобства вы предлагаете?</div>
          <div class="body-2">
            Гости обычно рассчитывают на эти удобства, но после публикации можно
            добавить другие.
          </div>
        </v-card-text>
        <v-card-text>
          <v-col cols="12">
            <v-combobox
              v-model="select"
              :items="items"
              multiple
              chips
            ></v-combobox>
          </v-col>
        </v-card-text>

        <v-card-text>
          <v-col cols="12">
            <div class="subtitle-1">Оборудование для безопасности</div>
            <v-combobox
              v-model="selectSafety"
              :items="itemsSafety"
              multiple
              chips
            ></v-combobox>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      select: ['Wifi', 'Телевизор'],
      items: ['Телевизор', 'Отопление', 'Кондиционер', 'Wifi', 'Утюг'],
      selectSafety: ['Видео наблючение', 'Дверь спальни запирается'],
      itemsSafety: [
        'Аптечка первой помощи',
        'Дверь спальни запирается',
        'Видео наблючение',
        'Решётки на окнах'
      ]
    }
  }
}
</script>
