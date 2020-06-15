<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <div class="title" align="center">
              How many guests can your place accommodate?
            </div>
            <div class="subtitle-1 font-italic" align="center">
              Check that you have enough beds to accommodate all your guests
              comfortably.
            </div>
            <v-form
              ><div>
                <v-row>
                  <v-col>Guests</v-col>
                  <v-col>
                    <v-text-field
                      :value="0"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width: 60px;"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <div>
                <v-col>
                  <v-select
                    :value="bedsCount"
                    :items="bedItems"
                    label="How many bedrooms can guests use?"
                    dense
                    @change="(val) => changeData('bedsCount', val)"
                  ></v-select>
                </v-col>
              </div>
              <div class="title" align="center">Sleeping arrangements</div>
              <div class="subtitle-1 font-italic align=center">
                Sharing the types of beds in each room can help people
                understand the sleeping arrangements.
              </div>
              <div>
                <template>
                  <v-row align="center">
                    <v-row justify="space-around"> </v-row>
                    <v-expansion-panels popout>
                      <v-expansion-panel
                        v-for="(item, i) in bedsPerRoom"
                        :key="i"
                      >
                        <v-expansion-panel-header
                          >Bedroom {{ i + 1 }}</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-row>
                            <v-col>
                              <v-list>
                                <v-list-item
                                  v-for="(type, typeI) in bedTypes"
                                  :key="typeI"
                                >
                                  <v-list-item-content>
                                    <v-list-item-title>{{
                                      type.label
                                    }}</v-list-item-title>
                                  </v-list-item-content>

                                  <v-list-item-icon>
                                    <v-text-field
                                      :value="item[type.key]"
                                      class="mt-0 pt-0"
                                      hide-details
                                      single-line
                                      type="number"
                                      style="width: 60px;"
                                      @change="
                                        (val) =>
                                          changeBedPerRoom(i, type.key, val)
                                      "
                                    ></v-text-field>
                                  </v-list-item-icon>
                                </v-list-item>
                              </v-list>
                            </v-col>
                          </v-row>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </template>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    items: [],
    bedItems: [],
    bedTypes: [
      { key: 'double', label: 'Double' },
      { key: 'single', label: 'Single' },
      { key: 'floorMatress', label: 'Floor matress' },
      { key: 'sofa', label: 'Sofa' },
      { key: 'sofaBed', label: 'Sofa bed' }
    ]
  }),
  computed: {
    ...mapGetters({
      bedsCount: 'newLet/bedsCount',
      bedsPerRoom: 'newLet/bedsPerRoom'
    })
  },
  mounted() {
    for (let i = 1; i <= 50; i++) {
      this.bedItems.push({
        text: `${i} bedrooms`,
        value: i
      })
    }
  },
  methods: {
    async changeData(key, val) {
      await this.$store.dispatch('newLet/setState', {
        key,
        val
      })

      if (key === 'bedsCount') {
        const bedsPerRoom = []
        for (let i = 1; i <= val; i++) {
          bedsPerRoom.push({
            double: 0,
            single: 0,
            floorMatress: 0,
            sofa: 0,
            sofaBed: 0
          })
        }

        await this.$store.dispatch('newLet/setState', {
          key: 'bedsPerRoom',
          val: bedsPerRoom
        })
      }
    },
    changeBedPerRoom(i, key, val) {
      // TODO: complete logic of this function
      // const beds = this.bedsPerRoom.map((item) => item)
      // beds[i][key] = val
      // console.log(beds)
      // this.$store.dispatch('newLet/setState', {
      //   key: 'bedsPerRoom',
      //   val: bedsPerRoom
      // })
    }
  }
}
</script>
