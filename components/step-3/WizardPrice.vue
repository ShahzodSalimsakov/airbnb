<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">Назначьте цену за жилье</div>
        </v-card-text>

        <v-card-text>
          <v-text-field
            v-mask="mask"
            label="Цена"
            suffix="сум"
            outlined
            return-masked-value
          >
          </v-text-field>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  directives: {
    mask
  },
  data() {
    return {
      mask: '###.###.###.###'
    }
  }
}
</script>

<style scoped></style>
