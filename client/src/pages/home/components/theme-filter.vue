<template>
  <view class="theme-filter">
    <view class="theme-select-list">
      <uni-data-select
        class="theme-select"
        v-model="basicThemeSelectValue"
        :localdata="basicThemeSelectLocaldata"
        :clear="false"
        @change="onChangeBasicSelect"
      ></uni-data-select>
      <uni-data-select
        class="theme-select"
        v-model="basicThemeSelectValue"
        :localdata="basicThemeSelectLocaldata"
        :clear="false"
        @change="onChangeBasicSelect"
      ></uni-data-select>
      <uni-data-select
        class="theme-select"
        v-model="basicThemeSelectValue"
        :localdata="basicThemeSelectLocaldata"
        :clear="false"
        @change="onChangeBasicSelect"
      ></uni-data-select>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let basicThemeSelectValue = ref("1");
const basicThemeSelectLocaldata = [
  { text: "最新", value: "1" },
  { text: "最热", value: "2" },
];

const onChangeBasicSelect = (newVal: string) => {
  basicThemeSelectValue.value = newVal;
};
</script>

<style lang="scss" scoped>
.theme-filter {
  box-sizing: border-box;
  padding: 20rpx;

  .theme-select-list {
    display: flex;
    flex-flow: row nowrap;

    .theme-select {
      flex: 1;

      &:nth-child(n + 2) {
        margin-left: 20rpx;
      }
    }
  }
}
</style>
