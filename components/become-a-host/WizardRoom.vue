<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-autocomplete
            ref="place"
            v-model="place"
            :rules="[() => !!place || 'This field is required']"
            :items="place"
            label="Для начала сузим выбор"
            placeholder="Выберите 1 вариант"
            required
          ></v-autocomplete> </v-card-text
        ><v-card-text>
          <v-autocomplete
            ref="type_of_housing"
            v-model="type_of_housing"
            :items="type_of_housing"
            label="Теперь выберите тип жилья"
            placeholder="Выберите тип жилья"
            required
          ></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    place: [
      'Квартира',
      'Дом',
      'Жилье при доме / квартире',
      'Уникальное жилье',
      'B&B',
      'Бутик-отель'
    ],
    type_of_housing: [
      'Квартира',
      'Кондоминиум',
      'Каса партикуляр (Куба)',
      'Лофт',
      'Апартаменты'
    ]
  })
}
</script>

<style></style>
