<script setup lang="ts">

import {ArrowDown} from "@element-plus/icons-vue";
import useLayOutSettingStore from '@/store/modules/setting.ts'

let layOutSettingStore = useLayOutSettingStore()
const fullScreen = () => {
  let doc = window.document;
  let docEl = doc.documentElement;
  let requestFullScreen = docEl.requestFullscreen;
  let cancelFullScreen = doc.exitFullscreen;
  if (!doc.fullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}
const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}
</script>

<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img src="../../../../public/logo.png" alt="" style="width: 24px;height: 24px;margin: 0 10px">
  <el-dropdown>
    <span class="el-dropdown-link">
 admin
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>