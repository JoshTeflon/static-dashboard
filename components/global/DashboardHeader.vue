<template>
  <div class="bg-white dark:bg-dashdark-200 h-16">
    <div class="w-[95%] h-full mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <h1 class="m-0">LMS</h1>
        <nav class="hidden lg:block ml-12 xl:ml-16">
          <ul class="flex items-center m-0">
            <li v-for="(link, index) in linkData" :key="index" class="mx-2 xl:mx-4">
              <NuxtLink :to="link.link" class="text-dashlight-300 dark:text-dashdark-100 text-xs" :disabled="link.disabled">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex items-center">
        <SearchInput size="small" />
        <Dropdown>
          <template #link>
            <div class="flex items-center ml-8">
              <img src="@/static/profile.svg" alt="profile" class="w-6 h-6 rounded-full" />
              <span class="text-black text-xxs mx-1 whitespace-nowrap">Zakariyya Aziz</span>
            </div>
          </template>
          <template #dropdown>
            <a-menu-item v-for="(pd, index) in profileData" :key="index">
              <a :href="pd.link" class="text-xs">{{ pd.name }}</a>
            </a-menu-item>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import links from '../../json/links.json'
import profileDropdown from '../../json/profile-dropdown.json'
import SearchInput from './SearchInput.vue'
import Dropdown from './Dropdown.vue'

export default {
	name: 'DashboardHeader',
  components: { 
    SearchInput, 
    Dropdown,
  },
  data() {
    return {
      linkData: links,
      profileData: profileDropdown,
    }
  },
}
</script>

<style scoped>
a.nuxt-link-exact-active {
  color: #377dff;
}
</style>
