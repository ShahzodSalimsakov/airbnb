<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-alert type="error" v-show="showRequiredError">
        {{ $t('fillFields') }}
      </v-alert>
      <v-form ref="form" v-model="valid">
        <v-card outlined ref="form">
          <v-card-text>
            <v-select
              ref="place"
              :value="letType"
              :items="placeItems"
              :rules="rules.letType"
              required
              :label="$t('firstNarrow')"
              :placeholder="$t('selectOne')"
              @change="(val) => changeData('letType', val)"
            ></v-select>
          </v-card-text>
          <div>
            <v-card-text>
              <v-select
                :value="typeOfHousing"
                :items="type_of_housing"
                :disabled="!letType"
                :rules="rules.typeOfHousing"
                required
                :label="$t('chooseProperty')"
                :placeholder="$t('propertyType')"
                @change="(val) => changeData('typeOfHousing', val)"
              ></v-select>
              <p v-if="typeOfHousing">{{ descriptionHouse.description }}</p>
            </v-card-text>
            <div v-show="typeOfHousing">
              <v-card-text>
                <h3>{{ $t('guestsHave') }}</h3>
                <v-radio-group
                  :value="disposalOfGuests"
                  :rules="rules.disposalOfGuests"
                  required
                  :mandatory="false"
                  @change="(val) => changeData('disposalOfGuests', val)"
                >
                  <v-radio :label="$t('entirePlace')" value="1"></v-radio>
                  <div>
                    {{ $t('wholePlace') }}
                  </div>
                  <v-radio :label="$t('privateRoom')" value="2"></v-radio>
                  <div>
                    {{ $t('privateRoomSub') }}
                  </div>
                  <v-radio :label="$t('sharedRoom')" value="3"></v-radio>
                  <div>
                    {{ $t('guestsSleep') }}
                  </div>
                </v-radio-group>
              </v-card-text>
              <v-card-text>
                <h3>{{ $t('onlyForGuests') }}</h3>
                <v-radio-group
                  :value="forGuest"
                  :rules="rules.forGuest"
                  required
                  :mandatory="false"
                  @change="(val) => changeData('forGuest', val)"
                >
                  <v-radio :label="$t('primarilyGuests')" value="4"></v-radio>
                  <v-radio :label="$t('keepBelongings')" value="5"></v-radio>
                </v-radio-group>
              </v-card-text>
              <v-card-text>
                <h3>{{ $t('listingCompany') }}</h3>
                <v-radio-group
                  :value="onBehalfOfTheCompany"
                  :mandatory="false"
                  @change="(val) => changeData('onBehalfOfTheCompany', val)"
                >
                  <v-radio
                    :label="$t('hostingRegisteredBusiness')"
                    value="6"
                  ></v-radio>
                  <v-radio
                    :label="$t('hostingIndividualOwner')"
                    value="7"
                  ></v-radio>
                  <div>
                    {{ $t('thisHelpsYou') }}
                  </div>
                </v-radio-group>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    placeItems: [
      {
        value: 1,
        text: 'Квартира'
      },
      {
        value: 2,
        text: 'Дом'
      },
      {
        value: 3,
        text: 'Жилье при доме / квартире'
      },
      {
        value: 4,
        text: 'Уникальное жилье'
      },
      {
        value: 5,
        text: 'B&B'
      },
      {
        value: 6,
        text: 'Бутик-отель'
      }
    ],
    type_of_housing: [
      {
        value: 1,
        text: 'Хижина',
        type: [1, 2],
        description:
          'Хижины делают из натуральных материалов: бревен или древесины. Обычно они находятся в лесах или горах.'
      },
      {
        value: 2,
        text: 'Кондоминиум',
        type: [1]
      },
      {
        value: 3,
        text: 'Каса партикуляр (Куба)',
        type: [1, 2]
      },
      {
        value: 4,
        text: 'Лофт',
        type: [1]
      },
      {
        value: 5,
        text: 'Апартаменты',
        type: [1]
      },
      {
        value: 6,
        text: 'Дом',
        type: [2]
      },
      {
        value: 7,
        text: 'Бунгало',
        type: [2]
      },
      {
        value: 8,
        text: 'Шале',
        type: [2]
      },
      {
        value: 9,
        text: 'Фермерский домик',
        type: [2]
      },
      {
        value: 10,
        text: 'Кикладский дом (Греция)',
        type: [2]
      },
      {
        value: 11,
        text: 'Даммузо (Италия)',
        type: [2]
      },
      {
        value: 12,
        text: 'Купольный дом',
        type: [2]
      },
      {
        value: 13,
        text: 'Землянка',
        type: [2]
      },
      {
        value: 14,
        text: 'Жилье на ферме',
        type: [2]
      },
      {
        value: 15,
        text: 'Плавучий дом',
        type: [2]
      },
      {
        value: 16,
        text: 'Маяк',
        type: [2]
      },
      {
        value: 17,
        text: 'Квартира',
        type: [1],
        description:
          'Квартиры находятся в многоквартирных домах или комплексах, где живут и другие люди.'
      }
    ],
    valid: false,
    showRequiredError: false,
    rules: {
      letType: [(v) => !!v || this.$t('requiredField')],
      typeOfHousing: [(v) => !!v || this.$t('requiredField')],
      disposalOfGuests: [(v) => !!v || this.$t('requiredField')],
      forGuest: [(v) => !!v || this.$t('requiredField')]
    }
  }),
  computed: {
    ...mapGetters({
      letType: 'newLet/letType',
      typeOfHousing: 'newLet/typeOfHousing',
      disposalOfGuests: 'newLet/disposalOfGuests',
      forGuest: 'newLet/forGuest',
      onBehalfOfTheCompany: 'newLet/onBehalfOfTheCompany'
    }),
    typeHouses() {
      return [...this.type_of_housing].filter((item) =>
        item.type.includes(this.place)
      )
    },
    descriptionHouse() {
      return [...this.type_of_housing].filter(
        (item) => item.value === this.typeOfHousing
      )[0]
    }
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
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

<style></style>
