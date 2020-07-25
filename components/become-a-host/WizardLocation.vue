<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-alert type="error" v-show="showRequiredError" ref="errorBlock">
        <span
          v-html="submitErrorText ? submitErrorText : $t('fillFields')"
        ></span>
      </v-alert>
      <v-form ref="form" v-model="valid">
        <v-card>
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
              :value="address"
              :rules="rules.address"
              type="text"
              :label="$t('address')"
              :placeholder="$t('addressExample')"
              readonly
              required
              @change="(val) => changeData('address', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="flat"
              type="text"
              :label="$t('apartmentOptional')"
              :placeholder="$t('apartmentOptionalExample')"
              @change="(val) => changeData('flat', val)"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :value="postIndex"
              type="text"
              :label="$t('index')"
              placeholder="100100"
              @change="(val) => changeData('postIndex', val)"
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
import wizardStepSubmit from '~/mixins/wizardStepSubmit'
export default {
  mixins: [wizardStepSubmit],
  data() {
    return {
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
      rules: {
        address: [(v) => !!v || this.$t('indicatePointTheMap')]
      },
      step: '1_4'
    }
  },
  computed: {
    ...mapGetters({
      country: 'newLet/country',
      postIndex: 'newLet/postIndex',
      address: 'newLet/address',
      flat: 'newLet/flat',
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
        key: 'address',
        val: geoObjects.get(0).getAddressLine()
      })
    },
    getSubmitData() {
      return {
        postIndex: this.postIndex,
        address: this.address,
        flat: this.flat,
        location: this.location
      }
    }
  }
}
</script>

<style scoped>
.location_map {
  height: 300px;
}
</style>
