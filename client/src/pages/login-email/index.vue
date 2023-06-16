<template>
  <view class="login-email">
    <view class="login-email__title">登陆婚柬应用</view>
    <view class="login-email__description"
      >未注册婚柬应用的邮箱，登陆即自动注册</view
    >
    <uni-easyinput
      class="login-email__input"
      type="text"
      v-model="user.email"
      placeholder="请输入电子邮箱"
    ></uni-easyinput>
    <uni-easyinput
      class="login-email__input"
      type="password"
      v-model="user.password"
      placeholder="请输入密码"
    ></uni-easyinput>
    <button class="login-email__login-btn" @click="onClickLoginBtn">
      登陆
    </button>
    <login-protocol
      class="login-email__login-protocol"
      v-model="protocolRadioGroupValue"
    />
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import LoginProtocol from "@/components/login-protocol/index.vue";
import * as authApi from "@/apis/auth";
import { useUserStore } from "@/stores";

const user = reactive({
  email: "",
  password: "",
});

const protocolRadioGroupValue = ref("");

const userStore = useUserStore();

const onClickLoginBtn = () => {
  if (!protocolRadioGroupValue.value) {
    return uni.showToast({
      title: "请确认并同意协议！",
      icon: "none",
    });
  }

  authApi
    .postSignInAndAutoSignUp(user)
    .then((data) => {
      userStore.setUserInfo(data);
      uni.reLaunch({ url: "/" });
    })
    .catch((data) => {
      uni.showToast({
        title: data.message,
        icon: "none",
      });
    });
};
</script>

<style lang="scss" scoped>
.login-email {
  padding: 60rpx 10%;
  .login-email__title {
    font-size: 48rpx;
  }

  .login-email__description {
    font-size: 24rpx;
    color: #ccc;
  }

  .login-email__input {
    margin-top: 20rpx;
  }

  .login-email__login-btn {
    margin-top: 60rpx;
    color: white;
    background-color: green;
    border-radius: 60rpx;
    font-size: 30rpx;
  }

  .login-email__login-protocol {
    margin-top: 40rpx;
  }
}
</style>
