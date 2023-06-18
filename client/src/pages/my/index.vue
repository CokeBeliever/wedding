<template>
  <view class="my-container">
    <view class="my-container__info">
      <view class="my-container__info__avatar">
        <image src="/static/my/user.png"></image>
        <text>名称</text>
      </view>
      <!-- #ifdef APP-PLUS-->
      <view class="my-container__info__tool">
        <uni-icons type="scan" size="28" color="#fff"></uni-icons>
        <uni-icons type="settings" size="28" color="#fff"></uni-icons>
      </view>
      <!-- #endif -->
    </view>
    <view class="my-container__vip">
      <image src="/static/my/user.png"></image>
      <text>全场主题免费用</text>
    </view>
    <view class="my-container__card">
      <!-- #ifdef APP-PLUS || H5-->
      <view class="my-container__card__item">
        <image src="/static/my/user.png"></image>
        <text>分享给好友</text>
      </view>
      <!-- #endif -->
      <!-- #ifdef MP-WEIXIN-->
      <view class="my-container__card__item">
        <image src="/static/my/user.png"></image>
        <text>关注公众号</text>
      </view>
      <!-- #endif -->
    </view>
    <!-- #ifdef APP-PLUS || MP-WEIXIN-->
    <view class="my-container__logout">
      <text>退出登录</text>
    </view>
    <!-- #endif -->
  </view>
</template>

<script lang="ts" setup>
import { tokenStorage } from "@/utils/storage";
import { onShow } from "@dcloudio/uni-app";

onShow(() => {
  if (!tokenStorage.get()) {
    uni.navigateTo({
      url: "/pages/login/index",
    });
  }
});
</script>

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
    .my-container__info__avatar {
      flex: 1;
      width: 0;
      align-self: flex-start;
      display: flex;
      align-items: center;
      image {
        border-radius: 50%;
        width: 110rpx;
        height: 110rpx;
      }
      text {
        margin-left: 40rpx;
        color: #fff;
      }
    }
    .my-container__info__tool {
      width: 150rpx;
      display: flex;
      justify-content: space-between;
    }
  }
  .my-container__vip {
    box-sizing: border-box;
    width: calc(100% - 70rpx);
    height: 100rpx;
    border-radius: 5rpx;
    position: absolute;
    top: 180rpx;
    left: 35rpx;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, #f4d19d, #f7dbb2);
    padding: 0 40rpx;
    image {
      width: 70rpx;
      height: 70rpx;
      border-radius: 50%;
      overflow: hidden;
    }
    text {
      margin-left: 30rpx;
      font-weight: bold;
      color: #583a1d;
    }
  }
  .my-container__card {
    box-sizing: border-box;
    width: calc(100% - 70rpx);
    background-color: #fff;
    border-radius: 5rpx;
    margin: 80rpx 35rpx 0 35rpx;
    .my-container__card__item {
      border-top: 1rpx solid #ccc;
      height: 100rpx;
      padding: 0 40rpx;
      display: flex;
      align-items: center;
      image {
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
        overflow: hidden;
      }
      text {
        margin-left: 30rpx;
      }
    }
    .my-container__card__item:first-child {
      border-top: none;
    }
  }
  .my-container__logout {
    box-sizing: border-box;
    width: calc(100% - 70rpx);
    height: 80rpx;
    background-color: #fff;
    border-radius: 5rpx;
    margin: 20rpx 35rpx 0 35rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
