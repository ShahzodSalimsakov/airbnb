<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <h2>Добавьте номер мобильного телефона</h2>
          <div class="pt-2">
            Мы будем отправлять вам запросы на бронирование, напоминания и
            другие уведомления. У вас должна быть возможность принимать SMS или
            звонки на этот номер.
          </div>
          <v-select v-model="selectedCode" :items="arrCountryCode" />
          <div>
            <span v-if="selectedCode" class="d-inline">{{
              getPhoneCode.code
            }}</span>
            <v-text-field
              v-model="phoneNumber"
              class="d-inline-block"
            ></v-text-field>
            <v-btn>Отправить</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'WizardVerifyPhone',
  data: () => ({
    selectedCode: '',
    phoneNumber: '',
    arrCountryCode: [
      {
        value: 'UZ',
        text: 'Узбекистан (+998)',
        code: '+998'
      },
      {
        value: 'KN',
        text: 'Конго (+242)',
        code: '+242'
      },
      {
        value: 'AZ',
        text: 'Азербайджан (+994)',
        code: '+994'
      }
    ]
  }),
  computed: {
    getPhoneCode() {
      return [...this.arrCountryCode].filter(
        (item) => item.value === this.selectedCode
      )[0]
    }
  }
}
</script>

<style scoped></style>
