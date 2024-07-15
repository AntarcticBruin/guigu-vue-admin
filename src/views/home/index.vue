<script setup lang="ts">
import {onMounted} from "vue";
import {GET_TOKEN} from "@/utils/token.ts";
import {useRouter} from "vue-router";

let router = useRouter();
onMounted(() => {
  console.log(!GET_TOKEN())
  if (!GET_TOKEN()) {
    router.push("/login");
  }
})
</script>

<template>
  <H1>我是一级路由首页展示数据</H1>
</template>

<style scoped>

</style>