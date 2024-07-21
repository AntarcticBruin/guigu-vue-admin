//创建用户相关的仓库
import {defineStore} from "pinia";
import type {loginForm, loginResponseData} from "../../api/user/type.ts";
import {reqLogin, reqUserinfo} from "../../api/user";
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
        async userLogin(data: loginForm) {
            let result: loginResponseData = await reqLogin(data);
            if (result.code === 200) {
                this.token = (result.data.token as string);
                SET_TOKEN((result.data.token as string))
                return 'ok';
            } else {
                return Promise.reject(new Error(result.data.message));
            }
        },
        async userInfo() {
            let result = await reqUserinfo();
            if (result.code === 200) {
                //获取用户信息
                this.avatar = result.data.checkUser.avatar;
                this.username = result.data.checkUser.username;
                return 'ok'
            } else {
                return Promise.reject(new Error(result.data.message));
            }

        },
        userLogout() {
            this.token = '';
            this.username = '';
            this.avatar = '';
            REMOVE_TOKEN()
        }
    },
    getters: {}
});
export default useUserStore;