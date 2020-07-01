<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6"
      ><v-alert type="error" v-show="showRequiredError">
        Для продолжения заполните поля
      </v-alert>
      <v-form ref="form" v-model="valid">
        <v-card ref="form">
          <v-card-text>
            <div class="headline">Где находится ваше жилье?</div>
            <div class="body-2">
              Гости увидят точный адрес жилья только после оформления
              бронирования.
            </div>
          </v-card-text>

          <div class="px-4 text-lg">Укажите точку на карте</div>
          <v-card-text>
            <yandex-map
              :coords="coords"
              :zoom="14"
              @click="onClickCoord"
              class="location_map"
            >
              <ymap-marker :coords="coords" marker-id="123" />
            </yandex-map>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="adres"
              :rules="rules.address"
              type="text"
              label="Адрес"
              placeholder="например, ул. Ленина, д. 12"
              readonly
              required
              @change="(val) => changeData('adres', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="appartment"
              type="text"
              label="Квартира
            (необязательно)"
              placeholder="например, кв. №7"
              @change="(val) => changeData('appartment', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="indeks"
              type="text"
              label="Индекс"
              placeholder="100100"
              @change="(val) => changeData('indeks', val)"
            ></v-text-field>
          </v-card-text>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
// import the styles
import { mapGetters } from 'vuex'
export default {
  // register the component
  data() {
    return {
      // define the default value
      // define options
      valid: false,
      showRequiredError: false,
      coords: [],
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa'
            },
            {
              id: 'ab',
              label: 'ab'
            }
          ]
        },
        {
          id: 'b',
          label: 'b'
        },
        {
          id: 'c',
          label: 'c'
        }
      ],
      indeks: '',
      rules: {
        address: [(v) => !!v || 'Укажите точку на карте']
      }
    }
  },
  computed: {
    ...mapGetters({
      country: 'newLet/country',
      adres: 'newLet/adres',
      appartment: 'newLet/appartment',
      location: 'newLet/location'
    })
  },
  mounted() {
    this.coords = [this.location.lat, this.location.lon]
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    },
    async onClickCoord(e) {
      this.coords = e.get('coords')
      const { geoObjects } = await window.ymaps.geocode(this.coords)
      this.$store.dispatch('newLet/setState', {
        key: 'location',
        val: {
          lat: this.coords[0],
          lon: this.coords[1]
        }
      })
      this.$store.dispatch('newLet/setState', {
        key: 'adres',
        val: geoObjects.get(0).getAddressLine()
      })
    },
    submit() {
      this.$refs.form.validate()
      this.showRequiredError = !this.valid
      return this.valid
    }
  }
}
</script>

<style scoped>
.location_map {
  height: 300px;
}
</style>
