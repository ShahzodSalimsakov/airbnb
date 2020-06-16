<template>
  <div>
    <v-toolbar light>
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          <v-select
            :items="items"
            :menu-props="{ top: true, offsetY: true }"
            prepend-icon="mdi-web"
            hide-details
            single-line
          ></v-select>
        </v-btn>
        <v-btn rounded text to="help">Помощь</v-btn>

        <v-dialog v-model="reg" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded text v-bind="attrs" v-on="on">
              Зарегистрироваться
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Зарегистрироваться</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Имя*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Фамилия*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Отчество"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Пароль*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Возраст*"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
              <small class="text-red-400"
                >*указывает на обязательное поле</small
              >
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="reg = false">
                Отменить
              </v-btn>
              <v-btn color="blue darken-1" text @click="reg = false">
                Зарегистрироваться
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded text v-bind="attrs" v-on="on">
              Войти
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Войти</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Пароль*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Отменить
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Войти
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'header',
  lang: '',
  data: () => ({
    items: ['Русский', 'Английский'],
    reg: false,
    dialog: false
  })
}
</script>

<style scoped></style>
