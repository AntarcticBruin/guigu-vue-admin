<script setup lang="ts">
import {ArrowRight, Expand, Fold} from "@element-plus/icons-vue";
//控制菜单是否折叠
import useLayOutSettingStore from "@/store/modules/setting.ts";
import {useRoute} from "vue-router"

let $route = useRoute();
console.log($route)
let layOutSettingStore = useLayOutSettingStore();
const changeIcon = () => {
  useLayOutSettingStore().fold = !useLayOutSettingStore().fold
}
</script>

<template>
  <!--    顶部左侧静态-->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layOutSettingStore.fold?Expand:Fold"></component>
  </el-icon>
  <!--      左侧面包屑-->
  <el-breadcrumb separator="/" :separator-icon="ArrowRight">

    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <el-icon style="margin: 0 5px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>


  </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>