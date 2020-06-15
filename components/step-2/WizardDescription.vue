<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">Расскажите гостям о жилье</div>
          <div class="body-2">
            Расскажите, чем интересен ваш район, и укажите особенности жилья,
            например быстрый Wi-Fi или парковку.
          </div>
        </v-card-text>

        <v-card-text>
          <v-textarea outlined auto-grow rows="4" row-height="30"></v-textarea>
          <div v-if="moreButton === false" class="my-2">
            <v-btn text large color="primary" @click="moreButton = true">
              Добавить подробности (по желанию)
            </v-btn>
          </div>
        </v-card-text>

        <div v-if="moreButton === true">
          <v-card-text>
            <div class="headline">Ваше жилье (по желанию)</div>
            <div class="body-2">
              Опишите внешний вид и атмосферу жилья. Обратите внимание гостей на
              дизайн, уютный уголок для чтения или садовую мебель.
            </div>
            <v-textarea
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">Ваше жилье (по желанию)</div>
            <div class="body-2">
              Опишите внешний вид и атмосферу жилья. Обратите внимание гостей на
              дизайн, уютный уголок для чтения или садовую мебель.
            </div>
            <v-textarea
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">Ваше жилье (по желанию)</div>
            <div class="body-2">
              Опишите внешний вид и атмосферу жилья. Обратите внимание гостей на
              дизайн, уютный уголок для чтения или садовую мебель.
            </div>
            <v-textarea
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div class="headline">Ваше жилье (по желанию)</div>
            <div class="body-2">
              Опишите внешний вид и атмосферу жилья. Обратите внимание гостей на
              дизайн, уютный уголок для чтения или садовую мебель.
            </div>
            <v-textarea
              filled
              auto-grow
              rows="4"
              row-height="30"
              shaped
            ></v-textarea>
          </v-card-text>

          <v-card-text>
            <div v-if="moreButton === true" class="my-2">
              <v-btn text large color="primary" @click="moreButton = false">
                Меньше
              </v-btn>
            </div>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      moreButton: false
    }
  }
}
</script>
