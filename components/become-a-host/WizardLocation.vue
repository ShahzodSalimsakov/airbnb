<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <div class="headline">Где находится ваше жилье?</div>
      <div class="body-2">
        Гости увидят точный адрес жилья только после оформления бронирования.
      </div>
      <v-card ref="form">
        <v-card-text>
          <v-btn class="ma-2" outlined color="teal">
            <v-icon left>mdi-send</v-icon>
            Использовать текущее местоположение
          </v-btn>
        </v-card-text>

        <v-card-text>
          <v-row>
            <treeselect
              :options="options"
              placeholder="Страна / регион"
              v-model="value"
              color="black"
            />
            <treeselect-value :value="value" />
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-text-field
              type="text"
              label="Адрес"
              placeholder="например, ул. Ленина, д. 12"
            ></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-text-field
              type="text"
              label="Квартира (необязательно)"
              placeholder="например, кв. №7"
            ></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-text-field
              type="text"
              label="Индекс"
              placeholder="100100"
            ></v-text-field>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      // define the default value
      value: null,
      // define options
      options: [
        {
          id: 'a',
          label: 'a',
          children: [
            {
              id: 'aa',
              label: 'aa'
            },
            {
              id: 'ab',
              label: 'ab'
            }
          ]
        },
        {
          id: 'b',
          label: 'b'
        },
        {
          id: 'c',
          label: 'c'
        }
      ]
    }
  }
}
</script>