<script setup lang="ts">

import useUserStore from "@/store/modules/user.ts";
//获取仓库
let userStore = useUserStore();
</script>

<template>
  <H1>登陆的人是：{{userStore.username}}</H1>
</template>

<style scoped lang="scss">

</style>