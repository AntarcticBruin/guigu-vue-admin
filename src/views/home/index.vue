<script setup lang="ts">
import {onBeforeMount} from "vue";
import {GET_TOKEN} from "@/utils/token.ts";
import {useRouter} from "vue-router";

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
    <div class="layout_slider">123</div>
    <!--顶部导航-->
    <div class="layout_tabbar">456</div>
    <!--内容展示区-->
    <div class="layout_main">789</div>
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
  }
}
</style>