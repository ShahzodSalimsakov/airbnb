<template>
  <v-timeline id="my_timeLine" dense class="pt-0">
    <v-timeline-item
      v-for="item in props"
      :key="item.id"
      :color="color"
      fill-dot
    >
      <template v-slot:icon>
        <span class="text-white text-4xl">{{ item.id + 1 }}</span>
      </template>

      <v-card-title class="headline font-bold">
        {{ item.name }}
      </v-card-title>
      <v-card-text>
        {{ item.title }}
      </v-card-text>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'timeLine',
  props: ['props', 'color']
}
</script>

<style scoped></style>
