<template>
  <v-container>
    <v-row>
      <v-col cols="8" class="mx-auto">
        <v-card>
          <v-card-text>
            <div class="title" align="center" i>{{ $t('localLawsTax') }}</div>
            <p class="subtitle">
              {{ $t('localLawsTaxText') }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'WizardLocalLaws'
}
</script>

<style scoped></style>
