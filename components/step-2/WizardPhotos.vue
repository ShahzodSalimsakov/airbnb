<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Добавьте фото в объявление</div>
          <div class="body-2">
            Фото помогают гостям представить, каково это — жить в вашем доме.
            Начните с одного и добавьте остальные после публикации.
          </div>
        </v-card-text>
        <v-card-text>
          <v-col cols="12">
            <v-file-input
              :rules="rules"
              accept="image/*"
              placeholder="Выбрать фотографию"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
