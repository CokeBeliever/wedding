<template>
  <view class="theme-list" v-if="themeList.length > 0">
    <view class="theme" v-for="item of themeList" :key="item.id">
      <image class="theme__cover-img" :src="item.path" />
      <view class="theme__info">
        <view class="theme__info_name">{{ item.name }}</view>
        <view class="theme__info_other"
          >{{ item.imageAmount }}图 | {{ item.makeAmount }}w人制作</view
        >
      </view>
    </view>
  </view>
  <view v-else class="not-found">暂无资源</view>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const themeList = reactive<any[]>([]);
</script>

<style lang="scss" scoped>
.theme-list {
  padding: 20rpx 40rpx;
  display: flex;
  flex-flow: row wrap;

  .theme {
    width: 325rpx;
    height: 580rpx;
    border-radius: 16rpx;
    background-color: yellow;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;

    &:nth-child(n + 3) {
      margin-top: 20rpx;
    }

    &:nth-child(even) {
      margin-left: 20rpx;
    }

    .theme__cover-img {
      width: 100%;
      height: 80%;
    }

    .theme__info {
      box-sizing: border-box;
      height: 20%;
      padding: 20rpx;
      background-color: white;

      .theme__info_name {
        color: black;
        font-size: 32rpx;
      }

      .theme__info_other {
        color: gray;
        font-size: 24rpx;
      }
    }
  }
}
.not-found {
  text-align: center;
  color: grey;
}
</style>
