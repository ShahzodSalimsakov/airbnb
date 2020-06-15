<template>
  <v-app dark>
    <v-content>
      <v-container>
        <Header />
        <v-layout column justify-center align-center>
          <v-flex xs12 sm8 md6>
            <div class="text-center">
              <h1>
                <nuxt-link to="/become-a-host">step 1</nuxt-link>
                <br />
                <nuxt-link to="/step2">step 2</nuxt-link>
                <br />
                <nuxt-link to="/step3">step 3</nuxt-link>
              </h1>
            </div>
          </v-flex>
        </v-layout>
        <Footer />
      </v-container>
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
