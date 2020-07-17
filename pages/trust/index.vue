<template class="text-black">
  <div>
    <div class="ml-12 pt-20 primary--text text-lg font-bold">
      {{ $t('trustSecurity') }}
    </div>
    <div class="ml-12 pt-5 pb-16 text-5xl font-bold text-gray-800">
      {{ $t('trustSecurityTitle') }}
    </div>
    <TrustTabs />
  </div>
</template>

<script>
import TrustTabs from '~/components/tabs/TrustTabs'
export default {
  name: 'index',
  components: { TrustTabs },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
