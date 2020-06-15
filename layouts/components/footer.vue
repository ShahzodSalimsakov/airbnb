<template>
  <div>
    <v-footer color="white" padless absolute>
      <v-card flat tile width="100%" class="white text-center">
        <v-card-text>
          <v-row>
            <v-col md="3">
              <ul class="text-left">
                <li
                  v-for="element in menuCol1"
                  :key="element.link"
                  class="d-block"
                  color="black"
                  text
                >
                  <a :href="element.link" class="text-decoration-none">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3">
              <ul class="text-left">
                <li
                  v-for="element in menuCol2"
                  :key="element.link"
                  class="d-block"
                  color="black"
                  text
                >
                  <a :href="element.link" class="text-decoration-none">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3">
              <ul class="text-left">
                <li
                  v-for="element in menuCol3"
                  :key="element.link"
                  class="d-block"
                  color="black"
                  text
                >
                  <a :href="element.link" class="text-decoration-none">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3">
              <ul class="text-left">
                <li
                  v-for="element in menuCol4"
                  :key="element.link"
                  class="d-block"
                  color="black"
                  text
                >
                  <a :href="element.link" class="text-decoration-none">
                    {{ element.title }}
                  </a>
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
                <nuxt-link to="/" color="black">Конфиденциальность</nuxt-link>
                <nuxt-link to="/">Условия</nuxt-link>
                <nuxt-link to="/">Карта сайта</nuxt-link>
              </div>
            </v-col>
            <v-col md="4">
              <div class="float-right">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 black--text"
                  icon
                >
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
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
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      menuCol1: [
        { link: '/', title: 'Личностное многообразие и принятие' },
        { link: '/', title: 'Доступность' },
        { link: '/', title: 'Доверие и безопасность' },
        { link: '/', title: 'Airbnb Citizen' },
        { link: '/', title: 'Олимпийские игры' },
        { link: '/', title: 'Пресс-центр' }
      ],
      menuCol2: [
        { link: '/', title: 'Журнал Airbnb Magazine' },
        { link: '/', title: 'Airbnb для бизнеса' },
        { link: '/', title: 'Пригласите друзей' },
        { link: '/', title: 'Работа' }
      ],
      menuCol3: [
        { link: '/', title: 'Принимайте гостей' },
        { link: '/', title: 'Организовать онлайн-Впечатление' },
        { link: '/', title: 'Обращение генерального директора Брайана Чески' },
        { link: '/', title: 'Ответственный прием гостей' },
        { link: '/', title: 'Open Homes' },
        { link: '/', title: 'Центр ресурсов' },
        { link: '/', title: 'Центр общения' }
      ],
      menuCol4: [
        { link: '/', title: 'Новости о коронавирусе' },
        { link: '/', title: 'Центр помощи' },
        { link: '/', title: 'Варианты отмены' },
        { link: '/', title: 'Поддержка соседей' }
      ]
    }
  }
}
</script>

<style scoped>
.theme--dark.v-select .v-select__selection--comma {
  color: #333333 !important;
}
</style>
