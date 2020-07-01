<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <div class="headline">{{ $t('addPhotoToAd') }}</div>
          <div class="body-2">
            {{ $t('addPhotoToAdTitle') }}
          </div>
        </v-card-text>
        <v-card-text>
          <v-col cols="12">
            <v-file-input
              :rules="rules"
              accept="image/*"
              :placeholder="$t('choosePhoto')"
              prepend-icon="mdi-camera"
            ></v-file-input>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
