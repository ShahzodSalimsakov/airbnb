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
          <v-text-field :rules="rulesTitle" counter="50"></v-text-field>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    rulesTitle: [
      (value) => !!value || 'Required.',
      (value) => (value || '').length <= 50 || 'Max 50 characters'
    ]
  })
}
</script>
