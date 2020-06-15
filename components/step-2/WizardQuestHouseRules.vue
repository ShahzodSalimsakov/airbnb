<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Создать название объявления</div>
          <div class="body-2">
            Гостей привлечет название, отражающее уникальность жилья
          </div>
        </v-card-text>
        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                Подходит для детей (2–12 лет)
                <v-dialog
                  v-if="!fromTwoYears"
                  v-model="fromTwoYearsDialog"
                  persistent
                  max-width="700px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text small color="primary" v-bind="attrs" v-on="on">
                      Объяснить, почему
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <v-card-text>
                        <div class="headline">
                          Объясните, почему ваше жилье не подходит для детей
                        </div>
                        <div class="body-2">
                          Какие детали вашего жилья легко повредить или они
                          представляют опасность для детей?
                        </div>
                      </v-card-text>
                      <v-card-text>
                        <v-textarea
                          outlined
                          auto-grow
                          rows="4"
                          row-height="30"
                          placeholder="Пример: на лестнице на второй этаж нет перил."
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
                  :value="fromTwoYears"
                  inset
                  color="success"
                  @change="(val) => changeData('fromTwoYears', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                Подходит для младенцев (младше 2 лет)
                <v-dialog
                  v-if="!beforeTwoYears"
                  v-model="beforeTwoYearsDialog"
                  persistent
                  max-width="700px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn text small color="primary" v-bind="attrs" v-on="on">
                      Объяснить, почему
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text>
                      <v-card-text>
                        <div class="headline">
                          Объясните, почему ваше жилье не подходит для детей
                        </div>
                        <div class="body-2">
                          Какие детали вашего жилья легко повредить или они
                          представляют опасность для детей?
                        </div>
                      </v-card-text>
                      <v-card-text>
                        <v-textarea
                          outlined
                          auto-grow
                          rows="4"
                          row-height="30"
                          placeholder="Пример: на лестнице на второй этаж нет перил."
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
                  :value="beforeTwoYears"
                  inset
                  color="success"
                  @change="(val) => changeData('beforeTwoYears', val)"
                ></v-switch>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

        <v-card-text>
          <div class="body-2">
            <v-row>
              <v-col md="8">
                Можно с животными
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
              <v-col md="8">
                Можно курить
              </v-col>
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
                Разрешены вечеринки
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
          <div class="body-1 font-weight-bold">Дополнительные правила</div>
          <v-row>
            <v-col md="8">
              <v-text-field
                placeholder="Тихий час? Уличной обуви не место дома?"
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-btn class="ma-2" tile large style="margin: 0 !important;">
                Добавить
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text>
          <div class="body-1 font-weight-bold">
            Что должны знать гости о вашем доме
          </div>

          <v-card-text>
            <v-card-text>
              <v-checkbox
                :value="climbStairs"
                dark
                hide-details
                label="Необходимо подниматься по лестнице"
                @change="(val) => changeData('climbStairs', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="noisy"
                dark
                hide-details
                label="Возможно, будет шумно"
                @change="(val) => changeData('noisy', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="pets"
                dark
                hide-details
                label="В доме живут питомцы"
                @change="(val) => changeData('pets', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="parking"
                dark
                hide-details
                label="Своей парковки нет"
                @change="(val) => changeData('parking', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="commonArea"
                dark
                hide-details
                label="Некоторые зоны являются общими"
                @change="(val) => changeData('commonArea', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="convenienceLimitations"
                dark
                hide-details
                label="Ограничения удобства"
                @change="(val) => changeData('convenienceLimitations', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="cctv"
                dark
                hide-details
                label="Устройства наблюдения или записи на территории жилья"
                @change="(val) => changeData('cctv', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="gun"
                dark
                hide-details
                label="Оружие на территории жилья"
                @change="(val) => changeData('gun', val)"
              ></v-checkbox>
            </v-card-text>

            <v-card-text>
              <v-checkbox
                :value="dangerPets"
                dark
                hide-details
                label="Опасные животные на территории жилья"
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
        ((value) => !!value || 'Required.',
        (value) => (value || '').length <= 150 || 'Max 150 characters')
      ]
    }
  },
  computed: {
    ...mapGetters({
      fromTwoYears: 'newLet/fromTwoYears',
      beforeTwoYears: 'newLet/beforeTwoYears',
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
