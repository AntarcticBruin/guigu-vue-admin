//用户相关的接口
import request from '@/utils/request.ts'
import {loginForm, loginResponseData, userinfoResponseData} from "./type.ts";

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
}


export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);
export const reqUserinfo = () => request.get<any, userinfoResponseData>(API.USERINFO_URL);