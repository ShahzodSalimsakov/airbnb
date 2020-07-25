<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('tellGuestsAboutLodging') }}</div>
          <div class="body-2">
            {{ $t('tellGuestsAboutLodgingTitle') }}
          </div>
        </v-card-text>

        <v-card-text>
          <v-textarea
            :value="aboutLet"
            outlined
            auto-grow
            rows="4"
            row-height="30"
            @change="(val) => changeData('aboutLet', val)"
          ></v-textarea>
          <div v-if="moreButton === false" class="my-2">
            <v-btn text large color="primary" @click="moreButton = true">
              {{ $t('addDetailsOptional') }}
            </v-btn>
          </div>
        </v-card-text>

        <div v-show="moreButton === true">
          <v-card-text>
            <div class="headline">{{ $t('yourHomeOptional') }}</div>
            <div class="body-2">
              {{ $t('yourHomeOptionalTitle') }}
            </div>
            <v-textarea
              :value="letAtmosphere"
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
              @change="(val) => changeData('letAtmosphere', val)"
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">
              {{ $t('communicationWithGuestsOptional') }}
            </div>
            <div class="body-2">
              {{ $t('communicationWithGuestsOptionalTitle') }}
            </div>
            <v-textarea
              :value="guestsCommunication"
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
              @change="(val) => changeData('guestsCommunication', val)"
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">
              {{ $t('yourAreaOptional') }}
            </div>
            <div class="body-2">
              {{ $t('yourAreaOptionalTitle') }}
            </div>
            <v-textarea
              :value="aboutDistrict"
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
              @change="(val) => changeData('aboutDistrict', val)"
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">
              {{ $t('whereToGoOptional') }}
            </div>
            <div class="body-2">
              {{ $t('whereToGoOptionalTitle') }}
            </div>
            <v-textarea
              :value="transportToLet"
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
              @change="(val) => changeData('transportToLet', val)"
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div v-if="moreButton === true" class="my-2">
              <v-btn text large color="primary" @click="moreButton = false">
                {{ $t('smaller') }}
              </v-btn>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      moreButton: false
    }
  },
  computed: {
    ...mapGetters({
      aboutLet: 'newLet/aboutLet',
      letAtmosphere: 'newLet/letAtmosphere',
      guestsCommunication: 'newLet/guestsCommunication',
      aboutDistrict: 'newLet/aboutDistrict',
      transportToLet: 'newLet/transportToLet'
    })
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    }
  }
}
</script>
