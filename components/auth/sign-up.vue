<template>
  <v-dialog v-model="reg" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <div
        v-bind="attrs"
        class="block mt-2 lg:inline-block lg:mt-0 mr-4 text-base"
        v-on="on"
      >
        Зарегистрироваться
      </div>
    </template>
    <div class="w-full">
      <v-form
        v-model="regFormValid"
        class="bg-white shadow-md rounded w-full max-w-lg px-8 pt-6 pb-8"
      >
        <v-row>
          <v-col cols="6" md="6" sm="12">
            <v-text-field
              v-model="form.first_name"
              :rules="rules.first_name"
              label="Имя"
              placeholder="Шухрат"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6" sm="12">
            <v-text-field
              v-model="form.last_name"
              :rules="rules.last_name"
              label="Фамилия"
              placeholder="Махкамов"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              label="Email"
              placeholder="Email"
              outlined
              :error="emailError.length > 0"
              :error-messages="emailError[0]"
              type="email"
              @change="clearErrors"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="6" sm="12">
            <v-text-field
              v-model="form.password"
              :rules="rules.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              label="Пароль"
              placeholder="******"
              outlined
              hint="Не менее 6 символов"
              counter
              @click:append="show = !show"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6" sm="12">
            <v-select
              v-model="form.city"
              :rules="rules.city"
              label="Город"
              :items="arrSitys"
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <div class="flex items-center justify-end">
          <v-btn
            :disabled="!regFormValid"
            color="primary"
            class="mr-4"
            @click="signup"
            :loading="formLoading"
          >
            Зарегистрироваться
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'sign-up',
  data() {
    return {
      formLoading: false,
      regFormValid: false,
      show: false,
      reg: false,
      arrSitys: [
        {
          text: 'Ташкент',
          value: 1
        },
        {
          text: 'Самарканд',
          value: 2
        },
        {
          text: 'Бухоро',
          value: 3
        },
        {
          text: 'Андижан',
          value: 4
        }
      ],
      dialog: false,
      rules: {
        email: [
          (v) => !!v || 'E-mail обязательно для заполнения',
          (v) => /.+@.+\..+/.test(v) || 'E-mail указан неверный'
        ],
        first_name: [(v) => !!v || 'Имя обязательно для заполнения'],
        last_name: [(v) => !!v || 'Фамилия обязательна для заполнения'],
        password: [
          (v) => (v && v.length >= 6) || 'Пароль должен быть длинее 6 символов'
        ],
        city: [(v) => !!v || 'Город обязателен для заполнения']
      },
      form: {
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        city: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      errors: 'validation/errors'
    }),
    emailError() {
      if (this.errors.email) {
        return this.errors.email
      }
      return []
    }
  },
  methods: {
    async signup() {
      this.formLoading = true
      try {
        await this.$axios.post('/api/register', this.form)
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        this.formLoading = false
        this.reg = false
        await this.$router.push('/')
      } catch (e) {
        this.formLoading = false
      }
    },
    clearErrors() {
      this.$store.dispatch('validation/clearErrors')
    }
  }
}
</script>

<style scoped></style>
