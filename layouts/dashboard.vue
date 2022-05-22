<template>
  <div class="bg-bglight dark:bg-bgdark w-full h-full">
    <DashboardHeader />
    <div class="max-screen-layout">
      <div class="margin-layout">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from '@/components/global/DashboardHeader.vue'

export default {
  name: 'DashboardLayout',
  components: { DashboardHeader },
}
</script>