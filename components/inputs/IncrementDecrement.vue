<template>
  <div class="d-flex">
    <div class="d-inline">
      <div class="d-inline-block">
        <v-text-field
          v-model="val"
          type="number"
          min="0"
          :placeholder="placeholder"
          @input="checkDisable"
        />
      </div>
      <v-btn :disabled="disabledButton" rounded @click="decrement">-</v-btn>
      <v-btn rounded @click="increment">+</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IncrementDecrement',
  props: ['placeholder'],
  data: () => ({
    val: '',
    disabledButton: null
  }),
  methods: {
    increment() {
      this.val++
      this.disabledButton = false
    },
    decrement() {
      if (this.val > 0) {
        this.disabledButton = false
        this.val--
      }

      if (this.val === 0) {
        this.disabledButton = true
      }
    },
    checkDisable() {
      if (this.val <= 0) {
        this.disabledButton = true
      } else {
        this.disabledButton = false
      }
    }
  }
}
</script>

<style scoped></style>
