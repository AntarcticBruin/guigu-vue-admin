//创建用户相关的仓库
import {defineStore} from "pinia";
import type {loginForm, loginResponseData} from "../../api/user/type.ts";
import {reqLogin} from "../../api/user";
import type {UserState} from './types/type.ts'
import {GET_TOKEN, SET_TOKEN} from "../../utils/token.ts";

const useUserStore = defineStore("user", {
    state: () => {
        let userState: UserState = {
            token: GET_TOKEN()
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
        }
    },
    getters: {}
});
export default useUserStore;