<template>
  <v-app light>
    <v-content class="font-serif">
      <Header />
      <v-container>
        <nuxt />
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from '~/layouts/components/header'
import Footer from '~/layouts/components/footer'
export default {
  components: { Header, Footer },
  data() {
    return {}
  }
}
</script>
