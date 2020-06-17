<template>
  <div>
    <v-toolbar light flat class="font-mono">
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          <v-select
            :items="items"
            :value="lang"
            prepend-icon="mdi-web"
            solo
            hide-details
            single-line
            class="w-56"
          ></v-select>
        </v-btn>
        <v-btn rounded text to="help">Помощь</v-btn>

        <v-dialog v-model="reg" persistent max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded text v-bind="attrs" v-on="on">
              Зарегистрироваться
            </v-btn>
          </template>
          <div class="w-full">
            <form
              class="bg-white shadow-md rounded w-full max-w-lg px-8 pt-6 pb-8"
            >
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Имя
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Шухрат"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Фамилия
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Махкамов"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-email"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Пароль
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <!--                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">-->
                <!--                  <label-->
                <!--                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"-->
                <!--                    for="grid-city"-->
                <!--                  >-->
                <!--                    Город-->
                <!--                  </label>-->
                <!--                  <input-->
                <!--                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"-->
                <!--                    id="grid-city"-->
                <!--                    type="text"-->
                <!--                    placeholder="Ташкент"-->
                <!--                  />-->
                <!--                </div>-->

                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-sity"
                  >
                    Город
                  </label>
                  <div class="relative">
                    <select
                      placeholder="Выберите город"
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-sity"
                    >
                      <option v-for="sity in arrSitys" :key="sity">
                        {{ sity }}
                      </option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-end">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="reg = false"
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
          <!--          <v-card>-->
          <!--            <v-card-title>-->
          <!--              <span class="headline">Зарегистрироваться</span>-->
          <!--            </v-card-title>-->
          <!--            <v-card-text>-->
          <!--              <v-container>-->
          <!--                <v-row>-->
          <!--                  <v-col cols="12" sm="6" md="4">-->
          <!--                    <v-text-field label="Имя*" required></v-text-field>-->
          <!--                  </v-col>-->
          <!--                  <v-col cols="12" sm="6" md="4">-->
          <!--                    <v-text-field label="Фамилия*" required></v-text-field>-->
          <!--                  </v-col>-->
          <!--                  <v-col cols="12" sm="6" md="4">-->
          <!--                    <v-text-field label="Отчество"></v-text-field>-->
          <!--                  </v-col>-->
          <!--                  <v-col cols="12">-->
          <!--                    <v-text-field label="Email*" required></v-text-field>-->
          <!--                  </v-col>-->
          <!--                  <v-col cols="12">-->
          <!--                    <v-text-field-->
          <!--                      label="Пароль*"-->
          <!--                      type="password"-->
          <!--                      required-->
          <!--                    ></v-text-field>-->
          <!--                  </v-col>-->
          <!--                  <v-col cols="12" sm="6">-->
          <!--                    <v-select-->
          <!--                      :items="['0-17', '18-29', '30-54', '54+']"-->
          <!--                      label="Возраст*"-->
          <!--                      required-->
          <!--                    ></v-select>-->
          <!--                  </v-col>-->
          <!--                </v-row>-->
          <!--              </v-container>-->
          <!--              <small class="text-red-400"-->
          <!--                >*указывает на обязательное поле</small-->
          <!--              >-->
          <!--            </v-card-text>-->
          <!--            <v-card-actions>-->
          <!--              <v-spacer></v-spacer>-->
          <!--              <v-btn color="blue darken-1" text @click="reg = false">-->
          <!--                Отменить-->
          <!--              </v-btn>-->
          <!--              <v-btn color="blue darken-1" text @click="reg = false">-->
          <!--                Зарегистрироваться-->
          <!--              </v-btn>-->
          <!--            </v-card-actions>-->
          <!--          </v-card>-->
        </v-dialog>

        <v-dialog v-model="dialog" persistent max-width="300px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn rounded text v-bind="attrs" v-on="on">
              Войти
            </v-btn>
          </template>
          <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Пароль
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="dialog = false"
                >
                  Войти
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                  @click="dialog = false"
                >
                  Забыли пароль?
                </a>
              </div>
            </form>
          </div>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      lang: 'ru',
      items: ['Русский', 'Английский'],
      reg: false,
      arrSitys: ['Ташкент', 'Самарканд', 'Бухоро', 'Андижан'],
      dialog: false
    }
  }
}
</script>

<style scoped></style>
