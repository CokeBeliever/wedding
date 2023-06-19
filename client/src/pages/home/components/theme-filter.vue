<template>
  <view class="theme-filter">
    <uni-data-select
      class="theme-filter__select"
      v-model="filterSelectValue"
      :localdata="filterSelectLocaldata"
      :clear="false"
      @change="onChangeFilterSelect"
    ></uni-data-select>
    <uni-search-bar
      class="theme-filter__search"
      v-model="filterSearchValue"
      radius="100"
      placeholder="搜索更多主题"
      maxlength="10"
      @confirm="onFilterSearchConfirm"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let filterSelectValue = ref("1");
const filterSelectLocaldata = [
  { text: "最新", value: "1" },
  { text: "最热", value: "2" },
];
const onChangeFilterSelect = (newVal: string) => {
  filterSelectValue.value = newVal;
};

const filterSearchValue = ref("");
const onFilterSearchConfirm = () => {
  uni.showToast({
    title: "搜索：" + filterSearchValue.value,
    icon: "none",
  });
};
</script>

<style lang="scss" scoped>
.theme-filter {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 20rpx;

  .theme-filter__select {
    flex: 1;
  }

  .theme-filter__search {
    flex: 4;
  }
}
</style>
