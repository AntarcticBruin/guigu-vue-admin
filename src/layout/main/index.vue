<script setup lang="ts">
import useLayOutSettingStore from "@/store/modules/setting.ts";
import {ref, watch, nextTick} from "vue";

let store = useLayOutSettingStore();
let flag = ref(true)
watch(() => store.refresh, () => {
  console.log('监听刷新')
  flag.value = false;
  nextTick(() => {
    flag.value = true;
  })
})
</script>
<script lang="ts">
export default {
  name: 'Main'
}
</script>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">

</style>