<template>
  <div>
    <v-app-bar
      color="indigo darken-2"
      dark
      scroll-target="#scrolling-techniques"
      app
      clipped-left
    >
      <v-toolbar-title>
        <nuxt-link to="/">Home</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped></style>
