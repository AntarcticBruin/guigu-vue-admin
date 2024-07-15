<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
import useUserStore from "@/store/modules/user.ts";
import {ElNotification} from "element-plus";
import {useRouter} from "vue-router";
import {getTimeOfDay} from "@/utils/time.ts";

let loading = ref(false);
let $router = useRouter();
let loginForm = reactive({username: 'admin', password: '111111'})
let userStore = useUserStore();
let loginForms = ref()
const login = async () => {
  try {
    await loginForms.value.validate()
    loading.value = true;
    await userStore.userLogin(loginForm);
    $router.push('/');
    loading.value = false;
    ElNotification(
        {
          type: 'success',
          message: '欢迎回来',
          title: `HI，${getTimeOfDay()}好，欢迎回来`
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
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少五位'))
  }
}

const rules = {
  username: [
    {required: true, validator: validatorUserName, trigger: 'change'},

  ],
  password: [
    {required: true, validator: validatorPassword, trigger: 'change'},
  ]
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <!--     :model   表单数据用哪个对象接收    :rules  校验规则-->
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <H1>Hello，能豆子</H1>
          <H2>欢迎来到硅谷甄选</H2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
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