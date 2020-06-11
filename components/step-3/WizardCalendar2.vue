<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="title">Обновите свой календарь</div>
        <div class="subtitle">
          Выберите даты, которые нужно заблокировать или разблокировать.
        </div>
      </v-col>
      <v-col cols="4">
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">HELP!</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline"
                >Гости увидят ваш календарь и будут бронировать доступные
                дни.</v-card-title
              >
              <v-card-text
                >Нажмите кнопку мыши и перетащите выделение, чтобы отметить дни,
                когда вы хотите принимать гостей.</v-card-text
              >
            </v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false"
                >ok</v-btn
              >
            </v-card-actions>
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet height="500">
          <v-calendar :now="today" :value="today" color="primary">
            <template v-slot:day="{ present, past, date }">
              <v-row class="fill-height">
                <template v-if="past && tracked[date]">
                  <v-sheet
                    v-for="(percent, i) in tracked[date]"
                    :key="i"
                    :title="category[i]"
                    :color="colors[i]"
                    :width="`${percent}%`"
                    height="100%"
                    tile
                  ></v-sheet>
                </template>
              </v-row>
            </template>
          </v-calendar>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WizardCalendar2',
  data: () => ({
    dialog: false,
    today: '2020-06-11',
    tracked: {
      '2019-01-09': [23, 45, 10],
      '2019-01-08': [10],
      '2019-01-07': [0, 78, 5],
      '2019-01-06': [0, 0, 50],
      '2019-01-05': [0, 10, 23],
      '2019-01-04': [2, 90],
      '2019-01-03': [10, 32],
      '2019-01-02': [80, 10, 10],
      '2019-01-01': [20, 25, 10]
    },
    colors: ['#1867c0', '#fb8c00', '#000000'],
    category: ['Development', 'Meetings', 'Slacking']
  })
}
</script>

<style scoped></style>
