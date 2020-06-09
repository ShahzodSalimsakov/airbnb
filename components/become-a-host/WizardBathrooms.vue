<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <div class="headline">Где находится ваше жилье?</div>
      <div class="body-2">
        Гости увидят точный адрес жилья только после оформления бронирования.
      </div>
      <v-card ref="form">
        <v-card-text>
          <v-row>
            <v-col md="6">
              <h3 class="headline">
                Количество ванных
              </h3>
            </v-col>
            <v-col md="2">
              <v-text-field
                :value="0"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px;"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
<style></style>
