<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import useUserStore from "@/store/modules/user.ts";
import {ElNotification} from "element-plus";
import {useRouter} from "vue-router";

let loading = ref(false);
let $router = useRouter();
let loginForm = reactive({username: 'admin', password: '111111'})
let userStore = useUserStore();
const login = async () => {
  loading.value = true;
  try {

    await userStore.userLogin(loginForm);
    $router.push('/');
    loading.value = false;
    ElNotification(
        {
          type: 'success',
          message: '欢迎回来',
          title: 'HI，' + getTimeOfDay() + '好，欢迎回来'
        }
    )
  } catch (error) {
    loading.value = false;
    ElNotification(
        {
          type: 'error',
          message: (error as Error).message,
        }
    )
  }

}

const getTimeOfDay = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 5 && hours < 12) {
    return '早晨';
  } else if (hours >= 12 && hours < 18) {
    return '下午';
  } else if (hours >= 18 && hours < 21) {
    return '晚上';
  } else {
    return '凌晨';
  }
}

</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <H1>Hello</H1>
          <H2>欢迎来到硅谷甄选</H2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :prefix-icon="Lock" type="password" v-model="loginForm.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    width: 80%;
    top: 30vh;
    position: relative;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
  }
}


</style>