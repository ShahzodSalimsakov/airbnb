<template>
  <div>
    <v-footer color="white" padless absolute>
      <v-card flat tile width="100%" class="white text-center container">
        <v-card-text>
          <v-row>
            <v-col md="3" class="leading-9">
              <ul class="text-left">
                <div class="text-black text-left font-semibold uppercase">
                  О нас
                </div>
                <li
                  v-for="element in menuCol1"
                  :key="element.link"
                  class="d-block"
                  text
                >
                  <a :href="element.link" class="text-black">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3" class="leading-9">
              <ul class="text-left">
                <div class="text-black text-left font-semibold uppercase">
                  Сообщество
                </div>
                <li
                  v-for="element in menuCol2"
                  :key="element.link"
                  class="d-block"
                  text
                >
                  <a :href="element.link" class="text-black">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3" class="leading-9">
              <ul class="text-left">
                <div class="text-black text-left font-semibold uppercase">
                  Хозяин/организатор
                </div>
                <li
                  v-for="element in menuCol3"
                  :key="element.link"
                  class="d-block"
                  text
                >
                  <a :href="element.link" class="text-black">
                    {{ element.title }}
                  </a>
                </li>
              </ul>
            </v-col>

            <v-col md="3" class="leading-9">
              <ul class="text-left">
                <div class="text-black text-left font-semibold uppercase">
                  Поддержка
                </div>
                <li
                  v-for="element in menuCol4"
                  :key="element.link"
                  class="d-block"
                  text
                >
                  <a :href="element.link" class="text-black">
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
.text-black {
  color: #333333 !important;
}
</style>
