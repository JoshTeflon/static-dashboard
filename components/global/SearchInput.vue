<template>
  <a-input-search
    placeholder="Search..." 
    :size="size"
    style="width: 200px"
    @search="onSearch"
  >
    <template #prefix>
      <a-icon type="search" :style="{ fontSize: '12px', color: '#B9B9B9' }" />
    </template>
  </a-input-search>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    size: {
      type: String,
      default: 'default'
    },
  },
  methods: {
    onSearch(value) {},
  },
}
</script>

<style>
.ant-input {
  background: #eeeeee;
  border-radius: 16px;
  color: #b9b9b9;
}

.ant-input-suffix {
  display: none !important;
}
</style>
