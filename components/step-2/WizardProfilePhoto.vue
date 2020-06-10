<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Добавьте фото профиля</div>
          <div class="body-2">
            Позаботьтесь, чтобы на фото было хорошо видно ваше лицо.
          </div>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col md="4">
              <v-avatar size="150px">
                <img
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                />
              </v-avatar>
            </v-col>
            <v-col md="8">
              <v-card-text>
                <v-btn color="indigo accent-3" large @click="triggerUpload">
                  <v-icon left dark>mdi-facebook</v-icon>
                  Использовать фото из Facebook
                </v-btn>
              </v-card-text>
              <v-card-text>
                <v-btn outlined large @click="triggerUpload">
                  <v-icon left dark>mdi-cloud-upload-outline</v-icon>
                  Загрузить фото
                </v-btn>
              </v-card-text>
              <input
                ref="fileInput"
                type="file"
                style="display: none;"
                accept="image/*"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    triggerUpload() {
      this.$refs.fileInput.click()
    }
  }
}
</script>
