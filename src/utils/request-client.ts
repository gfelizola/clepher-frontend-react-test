import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import globalQuote from '@/api/mocks/global-quote.json';
import overview from '@/api/mocks/overview.json';
import symbolSearch from '@/api/mocks/symbol-search.json';
import timeSeriesDaily from '@/api/mocks/time-series.json';

export const requestClient = axios.create({
  baseURL: import.meta.env.VITE_ALPHA_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey: import.meta.env.VITE_ALPHA_API_KEY,
  },
});

// config mocks for development usage
if( import.meta.env.VITE_ALPHA_API_USE_MOCK === "true" ) {
  const mock = new MockAdapter(requestClient, { delayResponse: 2000 });
  mock.onGet("/query")
    .reply((config) => {
      let response = {};

      switch( config.params.function ) {
        case "GLOBAL_QUOTE":
          response = globalQuote;
          break;
        case "OVERVIEW":
          response = overview;
          break;
        case "SYMBOL_SEARCH":
          response = symbolSearch;
          break;
        case "TIME_SERIES_DAILY":
          response = timeSeriesDaily;
          break;
      }

      return [200, { ...response }];
    })
  }