<template>
  <div class="text-black dark:text-white mb-12">
    <h1 class="text-lg lg:text-2xl pb-2 m-0">Welcome Back, {{ account }}</h1>
    <p class="text-xxs m-0">This is everything happening in your space</p>
  </div>
</template>

<script>
export default {
  name: 'DashboardHero',
  props: {
    account: {
      type: String,
      default: null
    }
  }
}
</script>