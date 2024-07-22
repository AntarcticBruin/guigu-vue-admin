//品牌管理模块接口
import request from "../../../utils/request.ts";
import {TradeMarkResponseData} from "./type.ts";

//接口地址
enum APT {
    TRADEMARK_URL = '/admin/product/baseTrademark/'
}

//获取已有品牌的方法
export const reqHasTradeMark = (page: number, limit: number) => request.get<any, TradeMarkResponseData>(APT.TRADEMARK_URL + `${page}/${limit}`);
