<template>
  <div>
    <v-footer color="white" padless>
      <v-card flat tile width="100%" class="white text-center container">
        <v-card-text>
          <v-row>
            <div
              class="w-64 flex-shrink-0 md:mx-0 text-start items-center md:text-left"
            >
              <a
                class="flex title-font font-medium items-center md:justify-start justify-start text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  ></path>
                </svg>
                <span class="ml-3 text-xl">tailblocks</span>
              </a>
              <p class="mt-2 text-sm text-gray-500">
                Air plant banjo lyft occupy retro adaptogen indego
              </p>
            </div>
            <v-col
              md="4"
              v-for="menu in footerMenu"
              :key="menu.name"
              class="leading-9"
            >
              <ul class="text-left">
                <div class="text-black text-left font-semibold uppercase">
                  {{ menu.name }}
                </div>
                <li
                  v-for="element in menu.items"
                  :key="element.link"
                  class="d-block"
                  text
                >
                  <nuxt-link :to="element.link" class="text-black">
                    {{ element.title }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider light></v-divider>

        <v-card-text class="black--text">
          <v-row>
            <v-col md="8">
              <div class="float-left">
                © {{ new Date().getFullYear() }} — Vuetify
                <nuxt-link to="/" class="text-black">
                  Конфиденциальность
                </nuxt-link>
                <nuxt-link to="/" class="text-black">Условия</nuxt-link>
                <nuxt-link to="/" class="text-black">Карта сайта</nuxt-link>
              </div>
            </v-col>
            <v-col md="4">
              <div class="float-right">
                <a
                  v-for="icon in icons"
                  :key="icon.id"
                  :href="icon.links"
                  class="mx-4"
                  icon
                  target="_blank"
                >
                  <v-icon size="24px" class="text-black">{{
                    icon.value
                  }}</v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { id: 1, value: 'mdi-facebook', links: 'https://www.facebook.com/' },
        { id: 2, value: 'mdi-vk', links: 'https://vk.com/' },
        { id: 3, value: 'mdi-twitter', links: 'http://twitter.com/' },
        { id: 4, value: 'mdi-instagram', links: 'https://www.instagram.com/' }
      ],
      footerMenu: [
        {
          name: this.$t('about'),
          items: [
            { link: '/accessibility', title: this.$t('Availability') },
            { link: '/trust', title: this.$t('trustSecurity') },
            { link: '/help', title: this.$t('HelpCenter') },
            { link: '/', title: 'Airbnb Citizen' },
            { link: '/news', title: this.$t('News') }
          ]
        },
        {
          name: this.$t('proprietor'),
          items: [
            {
              link: '/welcome-guests',
              title: this.$t('unAuthorizedNewHostLink')
            },
            // { link: '/', title: 'Airbnb для бизнеса' },
            { link: '/resources', title: this.$t('ResourceCenter') },
            { link: '/', title: this.$t('CommunicationCenter') }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.text-black {
  color: #333333 !important;
}
</style>
