<template>
  <div>
    <Student />
  </div>
</template>

<script>
import Student from './student/index.vue'

export default {
  name: 'DashboardIndex',
  components: {Student},
  layout: 'dashboard',
}
</script>