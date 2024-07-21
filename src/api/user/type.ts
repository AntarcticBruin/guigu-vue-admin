//登录接口参数类型
export interface loginFormData {
    username: string;
    password: string;
}

//全部接口都拥有的字段
export interface ResponseData {
    code: number;
    message: string;
    ok: boolean;
}

//登录接口返回的数据的类型
export interface loginResponseData extends ResponseData {
    data: string
}

//获取用户信息接口返回的数据类型
export interface userInfoResponseData extends ResponseData {
    data: {
        routes: string[],
        buttons: string[],
        roles: string[],
        name: string,
        avatar: string,
    }
}

