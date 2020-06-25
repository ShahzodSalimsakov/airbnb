<template>
  <div class="container">
    <nav class="flex items-center justify-between">
      <div class="flex">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <nuxt-link class="black--text text-xl tracking-tight" to="/"
          >Home</nuxt-link
        >
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block lg:flex lg:items-center lg:w-auto pt-10">
        <div class="text-sm lg:flex-grow flex">
          <!--          <v-select-->
          <!--            :items="items"-->
          <!--            prepend-icon="mdi-web"-->
          <!--            solo-->
          <!--            hide-details-->
          <!--            dense-->
          <!--            flat-->
          <!--            hide-selected-->
          <!--            single-line-->
          <!--            class="w-56 block lg:inline-block lg:mt-0 mr-4"-->
          <!--          ></v-select>-->
          <v-overflow-btn
            append-icon="mdi-web"
            class="my-2 lang"
            :items="items"
          />
          <nuxt-link
            to="help"
            class="block mt-2 lg:inline-block lg:mt-0 mr-4 text-base black--text"
          >
            Помощь
          </nuxt-link>
          <template v-if="!authenticated">
            <sign-up />
            <login />
          </template>
          <template v-else>
            <HeaderProfileDropdown />
          </template>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SignUp from '~/components/auth/sign-up'
import Login from '~/components/auth/login'
import HeaderProfileDropdown from '~/components/auth/header_profile_dropdown'
export default {
  name: 'Header',
  components: { HeaderProfileDropdown, Login, SignUp },
  data() {
    return {
      lang: 'ru',
      items: ['Русский', 'English', "O'zbekcha"]
    }
  },
  computed: {
    ...mapGetters({
      authenticated: 'authenticated'
    })
  },
  methods: {
    getKey: () => Object.keys(this.items)
  }
}
</script>

<style scoped lang="sass"></style>
