<template>
  <div>婚柬集</div>
</template>

<script lang="ts" setup>
import { tokenStorage } from "@/utils/storage";
import { onShow } from "@dcloudio/uni-app";

onShow(async () => {
  if (!tokenStorage.get()) {
    await uni.reLaunch({ url: "/" });
    await uni.navigateTo({
      url: "/pages/login/index",
    });
  }
});
</script>

<style lang="scss" scoped></style>
