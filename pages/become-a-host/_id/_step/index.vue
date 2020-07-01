<template>
  <div>
    <template v-if="+$route.params.step === 2">
      <SecondStepWizard />
    </template>
    <template v-else-if="+$route.params.step === 3">
      <ThirdStepWizard />
    </template>
    <template v-else>
      <FirstStepWizard />
    </template>
  </div>
</template>

<script>
import SecondStepWizard from '~/components/step-2/index'
import ThirdStepWizard from '~/components/step-3/index'
export default {
  layout: 'wizard',
  components: { ThirdStepWizard, SecondStepWizard }
}
</script>

<style scoped></style>
