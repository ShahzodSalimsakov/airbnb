<template>
  <div>
    <v-toolbar light flat>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          <v-select
            :items="items"
            :value="lang"
            prepend-icon="mdi-web"
            solo
            hide-details
            single-line
            class="w-56"
          ></v-select>
        </v-btn>
        <v-btn text to="help">Помощь</v-btn>
        <v-btn text to="sign-up">Зарегистрироваться</v-btn>
        <v-btn text to="login">Войти</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    lang: 'ru',
    items: [
      { text: 'Русский', value: 'ru' },
      { text: 'Английский', value: 'en' }
    ]
  })
}
</script>

<style scoped></style>
