<template>
  <div class="py-8">
    <Hero account="Student" />
    <StudentInfo />
  </div>
</template>

<script>
import Hero from '@/components/core/dashboard/Hero.vue'
import StudentInfo from '@/components/core/dashboard/student/StudentInfo.vue'

export default {
  name: 'StudentDashboard',
  components: {
    Hero,
    StudentInfo,
  }
}
</script>