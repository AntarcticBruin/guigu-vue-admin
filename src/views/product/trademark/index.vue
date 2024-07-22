<script setup lang="ts">
import {ref, onMounted, reactive} from "vue";
import type {UploadProps} from 'element-plus'
import {ElMessage} from 'element-plus'
import {reqAddOrUpdateTrademark, reqHasTradeMark} from '@/api/product/trademark'
import {Records, TradeMark, TradeMarkResponseData} from "@/api/product/trademark/type.ts";
//当前页码
let pageNo = ref<number>(1);
//每页展示的条数
let limit = ref<number>(3);
//已有品牌的数据总量
let total = ref<number>(0);
//品牌列表
let trademarkArr = ref<Records>([]);
//搜集新增品牌数据
let tradeMarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: ''
});
//对话框
let dialogFormVisible = ref(false);
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
//增加品牌数据
const addTradeMark = () => {
  tradeMarkParams.logoUrl = ''
  tradeMarkParams.tmName = ''
  dialogFormVisible.value = true;

}
//修改品牌数据
const updateTradeMark = () => {
  dialogFormVisible.value = true;
}
//对话框取消按钮
const cancel = () => {
  dialogFormVisible.value = false;

}

//对话框确认按钮
const confirm = async () => {

  let res: any = await reqAddOrUpdateTrademark(tradeMarkParams)
  if (res.code === 200) {
    dialogFormVisible.value = false;
    ElMessage.success('添加品牌成功');
    await getHasTradeMark()
  } else {
    ElMessage.error('添加品牌失败')
  }
}
//上传文件之前的钩子
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  tradeMarkParams.logoUrl = response.data
}
</script>
<template>
  <el-card class="box-card">
    <!--添加品牌的按钮-->
    <el-button type="primary" icon="Plus" size="default" @click="addTradeMark">添加品牌</el-button>
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
          <el-button type="primary" size="small" icon="Edit" @click="updateTradeMark">修改</el-button>
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
  <!--  对话框-->
  <!--  v-model 控制是否显示 -->
  <el-dialog v-model="dialogFormVisible" title="添加品牌" width="500">
    <el-form style="width: 80%">
      <el-form-item label="品牌名称" label-width="80px">
        <el-input type="text" placeholder="请输入品牌名称" v-model="tradeMarkParams.tmName"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="80px">
        <el-upload
            class="avatar-uploader"
            action="/api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="tradeMarkParams.logoUrl" :src="tradeMarkParams.logoUrl" class="avatar"/>
          <el-icon v-else class="avatar-uploader-icon">
            <Plus/>
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
      <el-button type="primary" size="default" @click="confirm">确定</el-button>
    </template>
  </el-dialog>

</template>


<style scoped lang="scss">
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>