<template v-slot:extension>
  <div>
    <TrustTabs :items="items" />
  </div>
</template>

<script>
import TrustTabs from '~/components/tabs/TrustTabs'
// import Overview from '~/pages/trust/component/Overview'
export default {
  name: 'index',
  components: { TrustTabs },
  data() {
    return {
      items: [
        {
          name: 'Обзор',
          content: 'Overview'
        },
        {
          name: 'Путешествия',
          content: '2'
        },
        {
          name: 'Прием гостей',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Стандарты сообщества',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          name: 'Программа «Безопасность жилья»',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
