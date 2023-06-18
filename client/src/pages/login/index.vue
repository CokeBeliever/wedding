<template>
  <view class="login">
    <view class="login__mode">
      <button class="login__mode__weixin" @click="onClickWeixinLoginBtn">
        微信登陆
      </button>
      <button class="login__mode__email" plain @click="onClickEmailLoginBtn">
        电子邮箱登陆
      </button>
    </view>
    <login-protocol class="login__protocol" v-model="protocolRadioGroupValue" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginProtocol from "@/components/login-protocol/index.vue";
import { useOnBackPress } from "@/composables";

useOnBackPress(() => {
  uni.reLaunch({ url: "/pages/home/index" });
  return true;
});

const protocolRadioGroupValue = ref("");

const onClickWeixinLoginBtn = () => {
  if (!protocolRadioGroupValue.value) {
    uni.showToast({
      title: "请确认并同意协议！",
      icon: "none",
    });
  }
  console.log("wx");
};

const onClickEmailLoginBtn = () => {
  uni.navigateTo({
    url: "/pages/login-email/index",
  });
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  height: calc(100vh - var(--window-top));

  .login__mode {
    width: 80%;
    .login__mode__weixin {
      color: white;
      background-color: green;
      border-radius: 60rpx;
      font-size: 30rpx;
    }

    .login__mode__email {
      margin-top: 20rpx;
      border-radius: 60rpx;
      font-size: 30rpx;
      border: 1rpx solid #ccc;
      outline: none;
    }
  }

  .login__protocol {
    padding: 50rpx 0;
  }
}
</style>
