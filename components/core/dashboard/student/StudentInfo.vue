<template>
  <div class="flex items-center w-full">
    <div v-for="(student, index) in students" :key="index" class="w-full mr-4">
      <InfoCard :stat="student.stat" :text="student.text" />
    </div>
  </div>
</template>

<script>
import studentInfo from '../../../../json/student-info.json'
import InfoCard from '../InfoCard.vue'
// import CourseSvg from '../../../svg/CourseSvg.vue'
// import StudentSvg from '../../../svg/StudentSvg.vue'
// import TeacherSvg from '../../../svg/TeacherSvg.vue'
// import AdminSvg from '../../../svg/AdminSvg.vue'

export default {
  name: 'StudentInfo',
  components: { InfoCard },
  data() {
    return {
      students: studentInfo,
    }
  },
}
</script>
