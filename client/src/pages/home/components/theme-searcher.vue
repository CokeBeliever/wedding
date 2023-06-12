<template>
  <view class="theme-searcher">
    <uni-search-bar
      v-model="themeSearchValue"
      radius="100"
      placeholder="搜索更多主题"
      maxlength="10"
      @confirm="onThemeSearchConfirm"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const themeSearchValue = ref("");
const onThemeSearchConfirm = () => {
  uni.showToast({
    title: "搜索：" + themeSearchValue.value,
    icon: "none",
  });
};
</script>

<style lang="scss" scoped></style>
