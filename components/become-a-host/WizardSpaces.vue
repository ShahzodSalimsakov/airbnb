<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">
            Какими помещениями гости могут пользоваться?
          </div>
          <div class="body-2">
            Укажите общие зоны, но не добавляйте места, которые вам не
            принадлежат.
          </div>
        </v-card-text>
        <v-card-text>
          <v-col cols="12">
            <v-combobox
              :value="selectSpaces"
              :items="items"
              multiple
              chips
              @change="(val) => changeData('selectSpaces', val)"
            ></v-combobox>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        'Кухня',
        'Стиральная машина',
        'Сушильная машина/комната',
        'Парковка',
        'Тренажерный зал',
        'Бассейн',
        'Джакузи'
      ]
    }
  },
  computed: {
    ...mapGetters({
      selectSpaces: 'newLet/selectSpaces'
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
