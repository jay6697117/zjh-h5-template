<script setup lang="ts">
// import Tabbar from "@/components/Tabbar/index.vue"; //注释验证Tabbar是全局组件
import { useCachedViewStoreHook } from '@/store/modules/cachedView'
import { computed } from 'vue'
const cachedViewList = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})
</script>
<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <div>{{ cachedViewList }}</div>
      <router-view v-slot="{ Component, route }">
        <div>fullPath:{{ route.fullPath }}</div>
        <div>path:{{ route.path }}</div>
        <div>name:{{ route.name }}</div>
        <keep-alive :include="cachedViewList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-wrapper__footer">
      <tabbar />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/styles/mixin.less';

.app-wrapper {
  .clearfix();
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
