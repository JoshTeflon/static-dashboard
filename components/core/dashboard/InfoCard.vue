<template>
  <div class="dash-card w-full bg-white dark:bg-dashdark-200 p-4">
    <div class="flex">
      <!-- <component :is="component" /> -->
      <div class="flex flex-col ml-4">
        <h1>{{ stat }}</h1>
        <span class="capitalize">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    component: {
      type: String,
      default: null,
    },
    stat: {
      type: Number,
      default: String,
    },
    text: {
      type: String,
      default: String,
    }
  },
}
</script>