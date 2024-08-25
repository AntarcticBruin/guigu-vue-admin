<script setup lang="ts">

</script>

<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select>
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
          <el-option label="深圳"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select>
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
          <el-option label="深圳"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select>
          <el-option label="北京"></el-option>
          <el-option label="上海"></el-option>
          <el-option label="广州"></el-option>
          <el-option label="深圳"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 10px 0">
    <el-button type="primary" size="default" icon="Plus">添加属性</el-button>
  </el-card>
</template>

<style scoped lang="scss">
.el-form-item {
  width: 260px;
}
</style>