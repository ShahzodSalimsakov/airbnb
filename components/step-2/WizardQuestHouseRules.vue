<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('defineHouseRulesForGuests') }}</div>
          <div class="body-2">
            {{ $t('defineHouseRulesForGuestsTitle') }}
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                {{ $t('suitableForChildren') }}
                <v-dialog
                  v-if="!childsFromTwoYears"
                  v-model="fromTwoYearsDialog"
                  persistent
                  max-width="700px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text small color="primary" v-bind="attrs" v-on="on">
                      {{ $t('explainWhy') }}
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <v-card-text>
                        <div class="headline">
                          {{ $t('notSuitableForChildren') }}
                        </div>
                        <div class="body-2">
                          {{ $t('notSuitableForChildrenTitle') }}
                        </div>
                      </v-card-text>
                      <v-card-text>
                        <v-textarea
                          outlined
                          auto-grow
                          rows="4"
                          row-height="30"
                          :placeholder="$t('suitableForChildrenExample')"
                          :rules="rulesTextarea"
                          counter="150"
                        ></v-textarea>
                      </v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="fromTwoYearsDialog = false"
                        >Отменить
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="fromTwoYearsDialog = false"
                        >Сохранить
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col md="4">
                <v-switch
                  :value="childsFromTwoYears"
                  inset
                  color="success"
                  @change="(val) => changeData('childsFromTwoYears', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                {{ $t('suitableForBabies') }}
                <v-dialog
                  v-if="!childsBeforeTwoYears"
                  v-model="beforeTwoYearsDialog"
                  persistent
                  max-width="700px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text small color="primary" v-bind="attrs" v-on="on">
                      {{ $t('explainWhy') }}
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <v-card-text>
                        <div class="headline">
                          {{ $t('notSuitableForChildren') }}
                        </div>
                        <div class="body-2">
                          {{ $t('notSuitableForChildrenTitle') }}
                        </div>
                      </v-card-text>
                      <v-card-text>
                        <v-textarea
                          outlined
                          auto-grow
                          rows="4"
                          row-height="30"
                          :placeholder="$t('suitableForChildrenExample')"
                          :rules="rulesTextarea"
                          counter="150"
                        ></v-textarea>
                      </v-card-text>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="beforeTwoYearsDialog = false"
                        >Отменить
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="beforeTwoYearsDialog = false"
                        >Сохранить
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col md="4">
                <v-switch
                  :value="childsBeforeTwoYears"
                  inset
                  color="success"
                  @change="(val) => changeData('childsBeforeTwoYears', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                {{ $t('possibleWithAnimals') }}
              </v-col>
              <v-col md="4">
                <v-switch
                  :value="possibleAnimals"
                  inset
                  color="success"
                  @change="(val) => changeData('possibleAnimals', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8"> {{ $t('canSmoke') }}</v-col>
              <v-col md="4">
                <v-switch
                  :value="possibleSmoking"
                  inset
                  color="success"
                  @change="(val) => changeData('possibleSmoking', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                {{ $t('partiesAllowed') }}
              </v-col>
              <v-col md="4">
                <v-switch
                  :value="possibleParty"
                  inset
                  color="success"
                  @change="(val) => changeData('possibleParty', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-1 font-weight-bold">
            {{ $t('additionalRules') }}
          </div>
          <v-row>
            <v-col md="8">
              <v-text-field
                :placeholder="$t('quietHourStreetShoesAreNotPlaceHome')"
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-btn class="ma-2" tile large style="margin: 0 !important;">
                {{ $t('add') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text>
          <div class="body-1 font-weight-bold">
            {{ $t('whatGuestsShouldKnowAboutYourHome') }}
          </div>

          <v-card-text>
            <v-card-text>
              <v-checkbox
                :value="climbStairs"
                hide-details
                :label="$t('needToClimbStairs')"
                @change="(val) => changeData('climbStairs', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="noisy"
                hide-details
                :label="$t('mayBeNoisy')"
                @change="(val) => changeData('noisy', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="pets"
                hide-details
                :label="$t('petsLiveHouse')"
                @change="(val) => changeData('pets', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="parking"
                hide-details
                :label="$t('noParking')"
                @change="(val) => changeData('parking', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="commonArea"
                hide-details
                :label="$t('someAreasAreShared')"
                @change="(val) => changeData('commonArea', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="convenienceLimitations"
                hide-details
                :label="$t('convenienceLimitations')"
                @change="(val) => changeData('convenienceLimitations', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="cctv"
                hide-details
                :label="$t('homeMonitoringRecordingDevices')"
                @change="(val) => changeData('cctv', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="dangerPets"
                hide-details
                :label="$t('dangerousAnimalsOnThePremises')"
                @change="(val) => changeData('dangerPets', val)"
              ></v-checkbox>
            </v-card-text>
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      row: null,
      beforeTwoYearsDialog: false,
      fromTwoYearsDialog: false,
      rulesTextarea: [
        ((value) => !!value || this.$t('required'),
        (value) => (value || '').length <= 150 || this.$t('max150Characters'))
      ]
    }
  },
  computed: {
    ...mapGetters({
      childsFromTwoYears: 'newLet/childsFromTwoYears',
      childsBeforeTwoYears: 'newLet/childsBeforeTwoYears',
      possibleAnimals: 'newLet/possibleAnimals',
      possibleSmoking: 'newLet/possibleSmoking',
      possibleParty: 'newLet/possibleParty',
      climbStairs: 'newLet/climbStairs',
      noisy: 'newLet/noisy',
      pets: 'newLet/pets',
      parking: 'newLet/parking',
      commonArea: 'newLet/commonArea',
      convenienceLimitations: 'newLet/convenienceLimitations',
      cctv: 'newLet/cctv',
      gun: 'newLet/gun',
      dangerPets: 'newLet/dangerPets'
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

<style scoped>
.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}
</style>
