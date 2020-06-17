<template>
  <div>
    <AlignTabsWithToolbarTitle />
    <First />
  </div>
</template>

<script>
import AlignTabsWithToolbarTitle from '~/components/tabs/AlignTabsWithToolbarTitle'
import First from '~/components/news-list/First'
export default {
  components: { First, AlignTabsWithToolbarTitle },
  layout: 'default'
}
</script>
