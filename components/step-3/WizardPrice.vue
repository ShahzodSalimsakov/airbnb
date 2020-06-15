<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <div class="headline">Назначьте цену за жилье</div>
        </v-card-text>

        <v-card-text>
          <v-text-field
            :value="price"
            v-mask="mask"
            label="Цена"
            suffix="сум"
            outlined
            return-masked-value
            @change="(val) => changeData('price', val)"
          >
          </v-text-field>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { mask } from 'vue-the-mask'
export default {
  directives: {
    mask
  },
  data() {
    return {
      mask: '###.###.###.###'
    }
  },
  computed: {
    ...mapGetters({
      price: 'newLet/price'
    })
  },
  methods: {
    changeData(key, val) {
      this.$store.dispatch('newLet/setState', {
        key,
        val
      })
    }
  }
}
</script>

<style scoped></style>
