<template>
  <view class="login-protocol">
    <radio-group @change="onChangeProtocolRadioGroup">
      <radio value="1" color="green" style="transform: scale(0.6)" />
    </radio-group>
    <text>本人已阅读并同意</text>
    <navigator
      class="login-protocol__nav"
      url="/pages/user-protocol/index"
    >
      <text>《用户协议》</text>
    </navigator>
    <text>和</text>
    <navigator
      class="login-protocol__nav"
      url="/pages/privacy-protocol/index"
    >
      《隐私协议》
    </navigator>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const onChangeProtocolRadioGroup = (event: any) => {
  emits("update:modelValue", event.detail.value);
};
</script>

<style lang="scss" scoped>
.login-protocol {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: #ccc;
  font-size: 24rpx;

  .login-protocol__nav {
    display: inline;
    color: skyblue;
    cursor: pointer;
  }
}
</style>
