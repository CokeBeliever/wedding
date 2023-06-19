<template>
  <image class="home-banner" src="/static/home/banner.jpg" />
  <theme-filter />
  <theme-list />
</template>

<script lang="ts" setup>
import ThemeFilter from "./components/theme-filter.vue";
import ThemeList from "./components/theme-list.vue";
</script>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  height: calc(44px + env(safe-area-inset-top) + var(--status-bar-height));
}
</style>
