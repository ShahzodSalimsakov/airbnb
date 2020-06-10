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
          <span>{{ arrCountryCode[0].code }}</span
          ><v-text-field v-model="phoneNumber"></v-text-field>
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
        text: 'Узбекистан (+998)',
        code: '+998'
      },
      'Конго (+242)',
      'Демократическая Республика Конго (+243)',
      'Гонконг (+852)',
      'Косово (+383)',
      'Макао (+853)',
      'Северная Македония (+389)',
      'Тайвань (+886)',
      'Австралия (+61)',
      'Австрия (+43)',
      'Азербайджан (+994)'
    ]
  })
  // computed: {
  //   getPhoneCode() => ()
  // }
}
</script>

<style scoped></style>
