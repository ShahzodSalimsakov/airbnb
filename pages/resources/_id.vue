<template> <h1>news id</h1></template>

<script>
export default {
  name: 'id',
  validate({ params }) {
    return Boolean(params.id)
  }
}
</script>

<style scoped></style>
