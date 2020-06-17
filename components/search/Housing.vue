<template>
  <div class="row">
    <div class="grid grid-cols-4">
      <v-text-field
        v-model="location"
        label="Местоположение"
        placeholder="Куда едете?"
        class="px-4"
        outlined
      />
      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="arrival"
            label="Прибытие"
            readonly
            placeholder="Когда?"
            v-bind="attrs"
            class="px-4"
            outlined
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="arrival" @input="menu1 = false"></v-date-picker>
      </v-menu>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="departure"
            label="Выезд"
            readonly
            placeholder="Когда?"
            v-bind="attrs"
            class="px-4"
            outlined
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="departure"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="100"
        offset-y
        auto
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            label="Количество гостей"
            placeholder="Сколько гостей?"
            class="px-4"
            outlined
            readonly
            v-bind="attrs"
            v-on="on"
          />
        </template>
        <v-card class="divide-y divide-gray-400">
          <div class="flex p-2">
            <div class="">
              <div class="font-black">Взрослые</div>
              <div>Возраст от 13</div>
            </div>
            <DecrementIncrement />
          </div>
          <div class="flex p-2">
            <div>
              <div class="font-black">Дети</div>
              <div>Возраст: 2—12</div>
            </div>
            <DecrementIncrement />
          </div>
          <div class="flex p-2">
            <div>
              <div class="font-black">Младенцы</div>
              <div>До 2</div>
            </div>
            <DecrementIncrement />
          </div>
        </v-card>
      </v-menu>
    </div>
    <v-btn color="error" class="ma-2 white--text">
      Поиск
      <v-icon right dark>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
import DecrementIncrement from '~/components/DecrementIncrement'
export default {
  name: 'Housing',
  components: { DecrementIncrement },
  data() {
    return {
      adult: 0,
      children: 0,
      babies: 0,
      location: '',
      arrival: new Date().toISOString().substr(0, 10),
      departure: '',
      menu1: false,
      menu2: false,
      menu: false
    }
  },
  mounted() {
    console.log(this.$data) // => 'foo'
  }
}
</script>

<style scoped></style>
