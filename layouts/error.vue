<template>
  <v-container v-if="error.statusCode === 404" light>
    <v-row>
      <v-col cols="6">
        <div align="left" class="pb-3px">
          <h1 style="font-size: 130px;">
            {{ $t('oops') }}
          </h1>
          <p style="font-size: 30px;">
            {{ $t('cannotFind') }}
          </p>
          <p style="font-size: 25px; color: red;">
            {{ $t('error404') }}
          </p>
          <NuxtLink to="/" style="font-size: 25px;">
            {{ $t('homePage') }}
          </NuxtLink>
        </div>
      </v-col>
      <v-col cols="6">
        <div align="center" class="pb-3px">
          <img src="@/assets/images/error404.png" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFoundParagraph1: 'Error 404'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped></style>
