<script setup lang="ts">
import {ref, onMounted} from "vue";
import {reqHasTradeMark} from '@/api/product/trademark'
import {Records, TradeMarkResponseData} from "@/api/product/trademark/type.ts";
//当前页码
let pageNo = ref<number>(1);
//每页展示的条数
let limit = ref<number>(3);
//已有品牌的数据总量
let total = ref<number>(0);
//品牌列表
let trademarkArr = ref<Records>([]);
const getHasTradeMark = async () => {
  let res: TradeMarkResponseData = await reqHasTradeMark(pageNo.value, limit.value);
  if (res.code === 200) {
    total.value = res.data.total;
    trademarkArr.value = res.data.records;
  }
}
onMounted(() => {
      getHasTradeMark()
    }
)
const changePageNo = () => {
  getHasTradeMark();
}

</script>
<template>
  <el-card class="box-card">
    <!--添加品牌的按钮-->
    <el-button type="primary" icon="Plus" size="default">添加品牌</el-button>
    <!--表格组件，放已有的品牌-->
    <el-table style="margin: 10px 0;height: 81vh" border :data="trademarkArr">
      <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
      <el-table-column label="品牌名称">
        <template #="{row,$index}">
          <pre style="color: red">{{ row.tmName }}</pre>
        </template>
      </el-table-column>
      <!--    table-column 默认用div显示数据    也可以用插槽  -->
      <el-table-column label="品牌LOGO">
        <template #="{row,$index}">
          <img :src="row.logoUrl" alt="" style="width: 80px;height: 80px;"/>
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{row,$index}">
          <el-button type="primary" size="small" icon="Edit">修改</el-button>
          <el-button type="primary" size="small" icon="Delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页器-->
    <el-pagination class="pagin"
        v-model:current-page="pageNo"
        v-model:page-size="limit"
        :page-sizes="[3, 5, 7, 9]"
        :background="true"
        layout=" prev, pager, next, jumper,->,total, sizes"
        :total="total"
        @change="changePageNo"
    />
  </el-card>
</template>


<style scoped lang="scss">

</style>