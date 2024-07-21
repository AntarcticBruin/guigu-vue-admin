<script setup lang="ts">
import {ref, onMounted} from "vue";
import {reqHasTradeMark} from '@/api/product/trademark'
//当前页码
let pageNo = ref<number>(1);
//每页展示的条数
let limit = ref<number>(3);
//已有品牌的数据总量
let total = ref<number>(0);
const getHasTradeMark = async () => {
  let res = await reqHasTradeMark(pageNo.value, limit.value);
  if (res.code === 200) {
    total.value = res.data.total;
  }
}
onMounted(() => {
      getHasTradeMark()
    }
)


</script>
<template>
  <el-card class="box-card">
    <!--添加品牌的按钮-->
    <el-button type="primary" icon="Plus" size="default">添加品牌</el-button>
    <!--表格组件，放已有的品牌-->
    <el-table style="margin: 10px 0" border>
      <el-table-column label="序号" width="80px" align="center"></el-table-column>
      <el-table-column label="品牌名称"></el-table-column>
      <el-table-column label="品牌LOGO"></el-table-column>
      <el-table-column label="品牌操作"></el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout=" prev, pager, next, jumper,->,total, sizes"
        :total="total"
    />
  </el-card>
</template>


<style scoped lang="scss">

</style>