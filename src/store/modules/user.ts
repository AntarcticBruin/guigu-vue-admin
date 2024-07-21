//创建用户相关的仓库
import {defineStore} from "pinia";
import type {loginFormData, loginResponseData, userInfoResponseData} from "../../api/user/type.ts";
import {reqLogin, reqLogout, reqUserinfo} from "../../api/user";
import type {UserState} from './types/type.ts'
import {GET_TOKEN, SET_TOKEN, REMOVE_TOKEN} from "../../utils/token.ts";
import {constRoute} from "../../router/routers.ts";

const useUserStore = defineStore("user", {
    state: () => {
        let userState: UserState = {
            token: GET_TOKEN(),
            menuRoutes: constRoute,
            avatar: '',
            username: ''
        }
        return userState;
    },
    actions: {
        async userLogin(data: loginFormData) {
            let result: loginResponseData = await reqLogin(data);
            if (result.code === 200) {
                this.token = (result.data as string);
                SET_TOKEN((result.data as string))
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message));
            }
        },
        async userInfo() {
            let result: userInfoResponseData = await reqUserinfo();
            console.log(result);
            if (result.code === 200) {
                //获取用户信息
                this.avatar = result.data.avatar;
                this.username = result.data.name;
                return 'ok'
            } else {
                return Promise.reject(new Error(result.message));
            }

        },
        async userLogout() {
            let rs: any = await reqLogout();
            if (rs.code === 200) {
                this.token = '';
                this.username = '';
                this.avatar = '';
                REMOVE_TOKEN()
                return 'ok'
            } else {
                return Promise.reject(new Error(rs.message));
            }

        }
    },
    getters: {}
});
export default useUserStore;