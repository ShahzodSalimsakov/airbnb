<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-form ref="form" v-model="valid">
        <v-card>
          <v-card-text>
            <div class="headline">{{ $t('addPhotoToAd') }}</div>
            <div class="body-2">
              {{ $t('addPhotoToAdTitle') }}
            </div>
          </v-card-text>
          <v-card-text>
            <v-alert type="error" v-show="showRequiredError" ref="errorBlock">
              <span
                v-html="submitErrorText ? submitErrorText : $t('fillFields')"
              ></span>
            </v-alert>
            <v-col cols="12">
              <div class="upload">
                <div v-if="files.length">
                  <v-row>
                    <v-col v-for="file in files" :key="file.id" cols="4">
                      <v-card class="d-inline-block mx-auto">
                        <v-container>
                          <v-row justify="space-between">
                            <v-col cols="auto" height="200">
                              <v-img
                                height="200"
                                width="200"
                                :src="file.thumb"
                              ></v-img>
                            </v-col>

                            <v-col cols="auto" class="text-center pl-0">
                              <v-row
                                class="flex-column ma-0 fill-height"
                                justify="center"
                              >
                                <v-col class="px-0">
                                  <v-btn
                                    icon
                                    size="large"
                                    color="red"
                                    @click.prevent="removeImage(file)"
                                  >
                                    <v-icon>mdi-delete-empty-outline</v-icon>
                                  </v-btn>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
                <div v-else>
                  <div class="w-6/12 mx-auto text-center">
                    <h4 class="text-2xl">
                      Drop files anywhere to upload<br />or
                    </h4>
                    <v-btn color="primary" class="mt-4" @click="activateDrag"
                      >Select Files</v-btn
                    >
                  </div>
                </div>

                <div
                  v-show="$refs.upload && $refs.upload.dropActive"
                  class="drop-active"
                >
                  <h3>Drop files to upload</h3>
                </div>

                <div class="example-btn">
                  <file-upload
                    class="btn btn-primary"
                    post-action="/upload/post"
                    :multiple="true"
                    :drop="true"
                    :drop-directory="true"
                    @input-filter="inputFilter"
                    v-model="files"
                    ref="upload"
                  >
                  </file-upload>
                  <v-btn @click="test">Davr</v-btn>
                </div>
              </div>
            </v-col>
          </v-card-text>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      files: [],
      showRequiredError: false,
      submitErrorText: '',
      valid: false
    }
  },
  computed: {
    ...mapGetters({
      itemId: 'newLet/itemId'
    })
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        newFile.blob = ''
        const URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
    },
    test() {
      console.log(this.files)
    },
    removeImage(file) {
      this.$refs.upload.remove(file)
    },
    activateDrag() {
      document.getElementById('file').click()
    },
    async submit() {
      this.$refs.form.validate()
      this.showRequiredError = !this.valid
      this.submitErrorText = ''
      if (!this.valid && this.$refs.errorBlock) {
        this.$refs.errorBlock.$el.scrollIntoView()
      }
      if (this.valid) {
        try {
          const formData = new FormData()

          this.files.map((file, index) => {
            formData.append('recordContent[photo][' + index + ']', file.file)
          })
          formData.append('id', this.itemId)
          formData.append('step', '2_1')
          const config = {
            headers: {
              'content-type': 'multipart/form-data'
            }
          }
          formData.append('_method', 'POST')
          const { data } = await this.$axios({
            method: 'post',
            url: '/api/unit',
            data: formData,
            config
          })
          this.$store.dispatch('newLet/setState', {
            key: 'itemId',
            val: data._id
          })
        } catch (e) {
          const submitErrors = this.submitErrors
          for (const key in submitErrors) {
            this.submitErrorText += submitErrors[key][0] + '<br />'
          }
          this.showRequiredError = true
          if (this.$refs.errorBlock) {
            setTimeout(() => {
              this.$refs.errorBlock.$el.scrollIntoView()
            })
          }
          return false
        }
      }
      return this.valid
    }
  }
}
</script>

<style>
.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}
.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: 0.6;
  text-align: center;
  background: #000;
}
.example-drag .drop-active h3 {
  margin: -0.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>
