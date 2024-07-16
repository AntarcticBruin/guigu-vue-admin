<script setup lang="ts">
import {onBeforeMount} from "vue";
import {GET_TOKEN} from "@/utils/token.ts";
import {useRouter} from "vue-router";
import Logo from './logo/index.vue'
import Menu from "./menu/index.vue";
import Main from './main/index.vue'
//获取用户仓库
import useUserStore from "@/store/modules/user.ts";

let userStore = useUserStore();
let router = useRouter();
onBeforeMount(() => {
  console.log(!GET_TOKEN())
  if (!GET_TOKEN()) {
    router.push("/login");
  }
})
</script>

<template>
  <div class="layout_container">
    <!--左侧菜单-->
    <div class="layout_slider">
      <!--      左侧logo-->
      <logo></logo>
      <!--      展示菜单-->
      <!--      滚动条-->
      <el-scrollbar class="scrollbar">
        <!--        菜单组件-->
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar">456</div>
    <!--内容展示区-->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      color: white;

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: blue;
    position: fixed;
    top: 0;
    left: $base-menu-width;
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>