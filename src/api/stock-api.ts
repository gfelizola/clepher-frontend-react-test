import { IStockDetails, SearchResult } from "@/types/index.types";
import { requestClient } from "@/utils/request-client";

type ParamsType = 
| { function: "OVERVIEW", symbol: string }
| { function: "SYMBOL_SEARCH", keywords: string }
| { function: "GLOBAL_QUOTE", symbol: string }
| { function: "TIME_SERIES_DAILY", symbol: string }

const apiCall = async <T>(params: ParamsType): Promise<T> => {
    const response = await requestClient({ method: "GET", url: '/query', params });
    return response.data;
}

export const fetchStockDetails = async (symbol: string): Promise<IStockDetails> => {
    return apiCall<IStockDetails>({
        function: "OVERVIEW",
        symbol,
    })
}

export const featchSymbolSearch = async (search: string) => {
    return apiCall<SearchResult>({
        function: "SYMBOL_SEARCH",
        keywords: search,
    })
};

export const fetchGlobalQuote = async (symbol: string) => {
    return apiCall<SearchResult>({
        function: "GLOBAL_QUOTE",
        symbol
    })
};

export const fetchTimeSeries = async (symbol: string) => {
    return apiCall({
        function: "TIME_SERIES_DAILY",
        symbol
    })
};