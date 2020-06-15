<template>
  <div>
    <v-toolbar light>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          <v-select
            :items="items"
            :menu-props="{ top: true, offsetY: true }"
            prepend-icon="mdi-web"
            hide-details
            single-line
          ></v-select>
        </v-btn>
        <v-btn rounded text to="help">Помощь</v-btn>
        <v-btn rounded text to="sign-up">Зарегистрироваться</v-btn>
        <v-btn rounded text to="login">Войти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'header',
  lang: '',
  data: () => ({
    items: ['Русский', 'Английский']
  })
}
</script>

<style scoped></style>
