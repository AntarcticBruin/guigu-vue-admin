<script setup lang="ts">

import {ArrowDown} from "@element-plus/icons-vue";
import useLayOutSettingStore from '@/store/modules/setting.ts'
import useUserStore from "@/store/modules/user.ts";
import {useRouter} from "vue-router";

let layOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
let $router = useRouter();
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
//刷新按钮
const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}
//退出登录
const logout = async () => {
// 清空用户数据
  //跳转到登陆页面
  await userStore.userLogout();
  $router.push('/login');
}
</script>

<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" alt="" style="width: 24px;height: 24px;margin: 0 10px;border-radius: 50%;">
  <el-dropdown>
    <span class="el-dropdown-link">
 {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>