<script setup lang="ts">
import {onMounted} from "vue";
import {reqLogin} from "@/api/user";

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: "111111",

  })
})

</script>


<template>
<router-view></router-view>
</template>


<style scoped lang="scss">

</style>
