import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'f5cb0a2c-34b4-4832-912b-bbf342990574',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
} // настройки плагина

Vue.use(YmapPlugin, settings)
