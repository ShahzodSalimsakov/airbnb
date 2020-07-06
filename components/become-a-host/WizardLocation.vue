<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-alert type="error" v-show="showRequiredError">
        {{ $t('fillFields') }}
      </v-alert>
      <v-form ref="form" v-model="valid">
        <v-card ref="form">
          <v-card-text>
            <div class="headline">
              {{ $t('becomeAHostStep4') }}
            </div>
            <div class="body-2">
              {{ $t('becomeAHostStep4Title') }}
            </div>
          </v-card-text>

          <div class="px-4 text-lg">
            {{ $t('indicatePointTheMap') }}
          </div>
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
              :label="$t('address')"
              :placeholder="$t('addressExample')"
              readonly
              required
              @change="(val) => changeData('adres', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="appartment"
              type="text"
              :label="$t('apartmentOptional')"
              :placeholder="$t('apartmentOptionalExample')"
              @change="(val) => changeData('appartment', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="indeks"
              type="text"
              :label="$t('index')"
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
        address: [(v) => !!v || this.$t('indicatePointTheMap')]
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
