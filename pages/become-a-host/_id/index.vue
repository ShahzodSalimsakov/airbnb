<template>
  <div>
    <FirstStepWizard />
  </div>
</template>

<script>
import FirstStepWizard from '~/components/become-a-host/index'
export default {
  layout: 'wizard',
  middleware: ['auth'],
  components: { FirstStepWizard }
}
</script>

<style scoped></style>
