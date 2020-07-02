<template>
  <div>
    <v-form
      v-model="regFormValid"
      class="bg-white md:w-4/12 mx-auto pb-8 pt-6 px-8 sm:w-full w-4/12"
    >
      <span class="block font-semibold mb-4 text-2xl uppercase">{{
        $t('signIn')
      }}</span>
      <v-alert v-show="!!errors.email" color="red lighten-2" dark>
        {{ errors.email && errors.email[0] }}
      </v-alert>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            label="Email"
            name="email"
            placeholder="Email"
            outlined
            type="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :label="$t('password')"
            name="password"
            placeholder="******"
            outlined
            hint="Не менее 6 символов"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="flex items-center justify-end">
        <v-btn
          :disabled="!regFormValid"
          color="primary"
          class="mr-4"
          :loading="formLoading"
          @click="signin"
        >
          {{ $t('signIn') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'loginPage',
  data() {
    return {
      formLoading: false,
      regFormValid: false,
      show: false,
      rules: {
        email: [
          (v) => !!v || 'E-mail обязательно для заполнения',
          (v) => /.+@.+\..+/.test(v) || 'E-mail указан неверный'
        ],
        password: [
          (v) => (v && v.length >= 6) || 'Пароль должен быть длинее 6 символов'
        ]
      },
      form: {
        password: '',
        email: ''
      },
      dialog: false
    }
  },
  computed: {
    ...mapGetters({
      errors: 'validation/errors'
    })
  },
  methods: {
    async signin() {
      this.formLoading = true
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })
        this.formLoading = false
        this.dialog = false
        this.$store.dispatch('validation/clearErrors')
      } catch (e) {
        this.formLoading = false
      }
    }
  }
}
</script>

<style scoped></style>
