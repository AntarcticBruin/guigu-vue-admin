//品牌管理模块接口
import request from "../../../utils/request.ts";
import {TradeMark, TradeMarkResponseData} from "./type.ts";

//接口地址
enum API {
    TRADEMARK_URL = '/admin/product/baseTrademark/',
    ADD_TRADEMARK_URL = '/admin/product/baseTrademark/save',
    UPDATE_TRADEMARK_URL = '/admin/product/baseTrademark/update',
}

//获取已有品牌的方法
export const reqHasTradeMark = (page: number, limit: number) => request.get<any, TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`);
//添加或修改品牌数据
export const reqAddOrUpdateTrademark = (data: TradeMark) => {
    if (data.id) {
        return request.put<any, any>(API.ADD_TRADEMARK_URL, data);
    }
    return request.post<any, any>(API.ADD_TRADEMARK_URL, data);
}


