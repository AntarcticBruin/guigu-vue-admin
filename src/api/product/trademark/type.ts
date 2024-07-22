export interface ResponseData {
    code: number;
    ok: boolean;
    message: string;
}

//已有品牌的数据类型
export interface TradeMark {
    id?: number;
    tmName: string;
    logoUrl: string;
}

export type Records = TradeMark[];

//获取已有品牌数据的类型
export interface TradeMarkResponseData extends ResponseData {
    data: {
        records: Records;
        total: number,
        size: number,
        current: number,
        pages: number,
    };
}