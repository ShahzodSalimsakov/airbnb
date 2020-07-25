<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('createAdName') }}</div>
          <div class="body-2">
            {{ $t('createAdNameTitle') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-text-field
            :value="title"
            :rules="rulesTitle"
            counter="50"
            required
            @change="(val) => changeData('title', val)"
          ></v-text-field>
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
      rulesTitle: [
        (value) => !!value || this.$t('required'),
        (value) => (value || '').length <= 50 || this.$t('max50Characters')
      ]
    }
  },
  computed: {
    ...mapGetters({
      title: 'newLet/title'
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
