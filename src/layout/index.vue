<script setup lang="ts">
import {useRoute} from "vue-router";
import Logo from './logo/index.vue'
import Menu from "./menu/index.vue";
import Main from './main/index.vue'
//获取用户仓库
import useUserStore from "@/store/modules/user.ts";
import Tabbar from './tabbar/index.vue'
import useLayOutSettingStore from "@/store/modules/setting.ts";

let layOutSettingStore = useLayOutSettingStore();

let userStore = useUserStore();
let $router = useRoute();

</script>
<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider" :class="{fold:layOutSettingStore.fold?true:false}">
      <!--      左侧logo-->
      <logo></logo>
      <!--      展示菜单-->
      <!--      滚动条-->
      <el-scrollbar class="scrollbar">
        <!--        菜单组件-->
        <el-menu background-color="#001529" text-color="white" :default-active="$router.path" :collapse="layOutSettingStore.fold">
          <Menu :menuList="userStore.menuRoutes" ></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar" :class="{fold:layOutSettingStore.fold?true:false}">
      <Tabbar></Tabbar>
    </div>
    <!--内容展示区-->
    <div class="layout_main" :class="{fold:layOutSettingStore.fold?true:false}">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    transition: all 0.3s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: red;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }

  }
}
</style>