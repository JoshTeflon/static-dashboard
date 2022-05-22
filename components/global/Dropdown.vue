<template>
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link flex items-center" @click="e => e.preventDefault()">
      <slot name="link" /> <a-icon type="down" :style="{color: '#000000'}" />
    </a>
    <a-menu slot="overlay">
      <slot name="dropdown" />
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'DropdownMenu',
}
</script>
