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
              comfortably.dd
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
                    v-model="bedsCount"
                    :items="bedItems"
                    label="How many bedrooms can guests use?"
                    dense
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
                      <v-expansion-panel v-for="i in bedsCount" :key="i">
                        <v-expansion-panel-header
                          >Bedroom {{ i }}</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          <v-row>
                            <v-col>
                              <v-list>
                                <v-list-item
                                  v-for="item in bedTypes"
                                  :key="item"
                                >
                                  <v-list-item-content>
                                    <v-list-item-title>{{
                                      item
                                    }}</v-list-item-title>
                                  </v-list-item-content>

                                  <v-list-item-icon>
                                    <v-text-field
                                      :value="0"
                                      class="mt-0 pt-0"
                                      hide-details
                                      single-line
                                      type="number"
                                      style="width: 60px;"
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
export default {
  data: () => ({
    items: [],
    bedsCount: 0,
    bedItems: [],
    bedTypes: ['Double', 'Single', 'Floor matress', 'Sofa', 'Sofa bed']
  }),
  mounted() {
    for (let i = 1; i <= 50; i++) {
      this.bedItems.push({
        text: `${i} bedrooms`,
        value: i
      })
    }
  }
}
</script>
