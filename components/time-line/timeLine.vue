<template>
  <v-timeline id="my_timeLine" dense class="pt-0">
    <v-timeline-item
      v-for="(item, index) in props"
      :key="item.id"
      :color="color"
      fill-dot
    >
      <template v-slot:icon>
        <span class="text-white text-4xl">{{ index + 1 }}</span>
      </template>
      <div>
        <v-card-title class="headline font-bold">
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: 'timeLine',
  props: ['props', 'color']
}
</script>

<style>
#my_timeLine .v-timeline-item__divider {
  display: inline;
}
#my_timeLine .v-timeline-item__divider .v-timeline-item__dot {
  width: 75px;
  height: 75px;
  margin-right: 75px;
  margin-left: 75px;
}
.v-application--is-ltr
  .v-timeline--dense#my_timeLine:not(.v-timeline--reverse):before {
  left: calc(113px - 1px);
}
#my_timeLine .v-timeline-item__body {
  width: 50%;
}
</style>
