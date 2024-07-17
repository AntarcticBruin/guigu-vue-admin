<script setup lang="ts">

import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar'
}
</script>
<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #e2c9c9, #bcabab, #ae9e9e);

  .tabbar-left {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }

  .tabbar-right {
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
}
</style>