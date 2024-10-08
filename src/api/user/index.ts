//用户相关的接口
import request from '@/utils/request.ts'
import {loginFormData, loginResponseData, userInfoResponseData} from "./type.ts";

//路径
enum API {
    LOGIN_URL = '/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout',

}

// 登录
export const reqLogin = (data: loginFormData) => request.post<any, loginResponseData>(API.LOGIN_URL, data);
// 获取用户信息
export const reqUserinfo = () => request.get<any, userInfoResponseData>(API.USERINFO_URL);
// 退出
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);