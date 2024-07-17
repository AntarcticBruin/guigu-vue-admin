<script setup lang="ts">
import setting from "@/setting.ts";
</script>
<script lang="ts">
export default {
  name: 'Logo'
}
</script>
<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="">
    <p>{{ setting.title }}</p>
  </div>

</template>

<style scoped lang="scss">

.logo{
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 10px;
  img{
    width: 40px;
    height: 40px;
  }
  p{
    font-size: 20px;
    margin-left: 10px;
    color: white;
    white-space: nowrap;
  }
}
</style>