<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            Настройка свободных дат
          </div>
          <div class="subtitle">
            Чтобы заблокировать или разблокировать дату, выберите ее. Можно
            внести изменения после публикации объявления.
          </div>
        </v-card-text>
        <v-card-text>
          <div class="mx-auto w-7/12">
            <div
              v-for="(calendar, i) in computedCalendars"
              :key="i"
              class="pb-12"
            >
              <div class="font-medium calendar-month-label text-2xl pb-4">
                {{ calendar.monthLabel }}
              </div>
              <table>
                <thead>
                  <tr class="calendar-week-days">
                    <td
                      v-for="(weekDay, iwd) in weekDays"
                      :key="iwd"
                      class="text-center"
                    >
                      {{ weekDay }}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(week, iw) in calendar.dates" :key="iw">
                    <td
                      v-for="(day, id) in week"
                      :key="id"
                      :class="{
                        'calendar-day-select': day.date,
                        chosen: calendarChosenDates.includes(day.fullDate)
                      }"
                    >
                      <button
                        class="flex align-center font-semibold h-16 justify-center text-2xl w-16"
                        @click="() => toggleChoosingDate(day.fullDate)"
                      >
                        {{ day.date || '' }}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <v-btn rounded outlined color="primary" @click="addNewMonths"
              >Показать другие даты</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { formatWithOptions, eachDayOfInterval } from 'date-fns/fp'
import { addDays, startOfWeek, endOfWeek } from 'date-fns'
import { ru } from 'date-fns/locale'
import { mapGetters } from 'vuex'
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
    category: ['Development', 'Meetings', 'Slacking'],
    weekDays: []
  }),
  computed: {
    ...mapGetters({
      calendarChosenDates: 'newLet/calendarChosenDates',
      calendarMonths: 'newLet/calendarMonths'
    }),
    computedCalendars() {
      return this.calendarMonths.map((item) => {
        const currentDate = new Date()
        currentDate.setMonth(item.month)
        currentDate.setFullYear(item.year)
        const monthLabel = formatWithOptions(
          { locale: ru },
          'LLLL yyyy',
          currentDate
        )
        const matrix = this.matrix(item.year, item.month, 1)
        return {
          monthLabel,
          dates: matrix
        }
      })
    }
  },
  mounted() {
    const now = new Date()
    const arr = eachDayOfInterval({
      start: startOfWeek(now, { weekStartsOn: 1 }),
      end: endOfWeek(now, { weekStartsOn: 1 })
    })
    arr.map((d) => {
      this.weekDays.push(formatWithOptions({ locale: ru }, 'eeeeee', d))
    })
  },
  methods: {
    matrix(year, month, weekStartsOn) {
      const startDate = startOfWeek(new Date(year, month, 1), { weekStartsOn })
      const rows = 6
      const cols = 7
      const length = rows * cols
      const res = Array.from({ length })
        // create a list of dates
        .map((_, index) => {
          const date = addDays(startDate, index)
          if (date.getMonth() !== month) {
            return {}
          }
          return { date: date.getDate(), fullDate: date, available: false }
        })
        // fold the array into a matrix
        .reduce(
          (matrix, current, index, days) =>
            !(index % cols !== 0)
              ? [...matrix, days.slice(index, index + cols)]
              : matrix,
          []
        )
      return res.filter(
        (item) => item.filter((i) => Object.keys(i).length > 0).length
      )
    },
    toggleChoosingDate(fullDate) {
      this.$store.dispatch('newLet/toggleChoosingDate', {
        date: fullDate
      })
    },
    addNewMonths() {
      const lastMonth = {
        ...this.calendarMonths[this.calendarMonths.length - 1]
      }
      for (let i = 0; i < 3; i++) {
        if (lastMonth.month >= 11) {
          lastMonth.month = 0
          lastMonth.year++
        } else {
          lastMonth.month++
        }
        this.$store.dispatch('newLet/addNewCalendarMonth', lastMonth)
      }
    }
  }
}
</script>

<style scoped>
.calendar-week-days {
  border-bottom: 0.5px solid rgb(221, 221, 221) !important;
}
.calendar-day-select {
  border-width: 1px;
  position: relative;
}
.calendar-day-select button {
  background: rgba(72, 72, 72, 0.05) !important;
}

.calendar-day-select button:hover {
  background-color: rgb(246, 246, 246) !important;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(72, 72, 72) !important;
}
.calendar-day-select button::after {
  cursor: pointer !important;
  content: '';
  top: 0px !important;
  left: 0px !important;
  width: 40% !important;
  height: 40% !important;
  position: absolute !important;
  margin: 30% !important;
  background: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0) calc(50% - 1px),
    rgb(72, 72, 72),
    rgba(0, 0, 0, 0) calc(50% + 1px)
  );
}
.calendar-day-select.chosen button::after {
  content: none;
}

.calendar-day-select.chosen button {
  background: #fff !important;
}
</style>
