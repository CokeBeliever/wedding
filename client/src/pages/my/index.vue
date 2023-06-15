<template>
  <view class="my-container">
    <view class="my-container__info">
      <view class="avatar">
        <image src=""></image>
        <text>名称</text>
      </view>
      <view class="tool"></view>
    </view>
    <view class="my-container__card"></view>
    <!-- #ifdef APP-PLUS || MP-WEIXIN-->
    <view class="my-container__logout"></view>
    <!-- #endif -->
  </view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
page {
  width: 100%;
  height: 100%;
}
.my-container {
  width: 100%;
  height: 100%;
  background-color: #f3f3f8;
  position: relative;
  overflow: auto;

  .my-container__info {
    height: 230rpx;
    padding: 0 35rpx;
    background-color: #2b2f3c;
    display: flex;
    .avatar {
      flex: 1;
      image {
        width: 110rpx;
        height: 110rpx;
      }
    }
    .tool {
      width: 150rpx;
    }
  }
  .my-container__card {
  }
}
</style>
