<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-form ref="form" v-model="valid">
          <v-card-text>
            <div class="headline">
              {{ $t('whatSpacesGuestsUse') }}
            </div>
            <div class="body-2">
              {{ $t('includeCommonAreas') }}
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
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import wizardStepSubmit from '~/mixins/wizardStepSubmit'
export default {
  mixins: [wizardStepSubmit],
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
      ],
      step: '1_6'
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
    },
    getSubmitData() {
      return {
        selectSpaces: this.selectSpaces
      }
    }
  }
}
</script>
