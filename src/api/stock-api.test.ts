import { describe, expect, it, vi } from "vitest";
import { type ParamsType, apiCall, fetchStockDetails } from "./stock-api";

// TEST SETUP
const mocks = vi.hoisted(() => ({
	get: vi.fn(),
	post: vi.fn(),
}));

vi.mock("@/utils/request-client", () => {
	return {
		requestClient: mocks.get,
	};
});

// SOME TYPE VALIDATION TESTS
describe("ParamsType", () => {
	it("should allow 'OVERVIEW' function with symbol", () => {
		const params: ParamsType = { function: "OVERVIEW", symbol: "AAPL" };
		expect(params).toEqual({ function: "OVERVIEW", symbol: "AAPL" });
	});

	it("should allow 'SYMBOL_SEARCH' function with keywords", () => {
		const params: ParamsType = { function: "SYMBOL_SEARCH", keywords: "Apple" };
		expect(params).toEqual({ function: "SYMBOL_SEARCH", keywords: "Apple" });
	});

	it("should allow 'GLOBAL_QUOTE' function with symbol", () => {
		const params: ParamsType = { function: "GLOBAL_QUOTE", symbol: "AAPL" };
		expect(params).toEqual({ function: "GLOBAL_QUOTE", symbol: "AAPL" });
	});

	it("should allow 'TIME_SERIES_DAILY' function with symbol", () => {
		const params: ParamsType = {
			function: "TIME_SERIES_DAILY",
			symbol: "AAPL",
		};
		expect(params).toEqual({ function: "TIME_SERIES_DAILY", symbol: "AAPL" });
	});
});

// SOME HELPER METHOD TESTS
describe("apiCall", () => {
	it("should make a GET request to /query with the provided params", async () => {
		// ARRANGE
		mocks.get.mockResolvedValueOnce({ data: "response" });
		const params: ParamsType = { function: "OVERVIEW", symbol: "AAPL" };

		// ACT
		const response = await apiCall(params);

		// ASSERT
		expect(mocks.get).toHaveBeenCalledWith({
			url: "/query",
			method: "GET",
			params,
		});
		expect(response).toBe("response");
	});
});

// SOME QUERY METHOD TESTS
describe("fetchStockDetails", () => {
	it("should call apiCall with OVERVIEW function and symbol", async () => {
		// ARRANGE
		const fakeResponse = {
			Symbol: "IBM",
			AssetType: "Common Stock",
			Name: "International Business Machines",
			Description:
				"International Business Machines Corporation (IBM) is an American multinational technology company",
		};

		mocks.get.mockResolvedValueOnce({ data: fakeResponse });
		const symbol = "IBM";

		// ACT
		const response = await fetchStockDetails(symbol);

		// ASSERT
		expect(mocks.get).toHaveBeenCalledWith({
			url: "/query",
			method: "GET",
			params: { function: "OVERVIEW", symbol },
		});
		expect(response).toBe(fakeResponse);
	});
});
