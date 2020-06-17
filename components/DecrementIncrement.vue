<template>
  <div>
    <v-btn class="mx-2" fab x-small :disabled="isDisabled" @click="value--">
      <v-icon dark>mdi-minus</v-icon>
    </v-btn>
    <span>{{ value }}</span>
    <v-btn class="mx-2" fab x-small @click="value++">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'DecrementIncrement',
  data() {
    return {
      value: 0
    }
  },
  computed: {
    isDisabled() {
      return this.value === 0
    }
  }
}
</script>

<style scoped></style>
