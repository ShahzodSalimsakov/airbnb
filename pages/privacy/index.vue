<template>
  <div>
    <PrivacyRu v-if="$i18n.locale == 'ru'" />
    <PrivacyUz v-else />
    <h1>{{ $t('privacyPolicy') }}</h1>
    <h2>{{ $t('introduction') }}</h2>
    <p class="text-justify">{{ $t('introductionParag1') }}</p>
    <div>
      <h2>{{ $t('informationWeCollect') }}</h2>
      <h3>{{ $t('informationYouGiveToUs') }}</h3>
      <h4>{{ $t('informationThatIsNecessaryForTheUse') }}</h4>
      <p class="text-justify">
        {{ $t('informationThatIsNecessaryForTheUseParag1') }}
      </p>
      <ul>
        <li>{{ $t('listAccountInformation') }}</li>
        <li>{{ $t('listProfileAndListingInformation') }}</li>
        <li>{{ $t('listIdentityVerificationInformation') }}</li>
        <li>{{ $t('listPaymentInformation') }}</li>
      </ul>
      <h4>{{ $t('informationYouChooseToGiveUs') }}</h4>
      <p class="text-justify">
        {{ $t('informationYouChooseToGiveUsParag') }}
      </p>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import PrivacyUz from '~/components/pages/privacy/uz'
import PrivacyRu from '~/components/pages/privacy/ru'
export default {
  name: 'PrivacyPage',
  components: {
    PrivacyRu,
    PrivacyUz
  }
}
</script>

<style scoped></style>
