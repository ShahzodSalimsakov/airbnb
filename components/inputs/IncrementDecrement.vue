<template>
  <div class="d-flex">
    <div class="text-base pr-5" style="line-height: 4em;">{{ label }}:</div>
    <div class="d-inline">
      <v-btn :disabled="disabledButton" rounded fab depressed @click="decrement"
        >-</v-btn
      >
      <div class="d-inline-block">
        <v-text-field
          style="width: 25px;"
          v-model="val"
          type="number"
          min="1"
          :placeholder="placeholder"
          @input="checkDisable"
        />
      </div>
      <v-btn rounded fab depressed @click="increment">+</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IncrementDecrement',
  props: ['placeholder', 'label'],
  data: () => ({
    val: '1',
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
