export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    DRACULA = 'dracula',
}

export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export interface StockContextType {
    actualStock: string
    setActualStock: (symbol: string) => void
}

export interface IStockDetails {
    Symbol: string;
    AssetType: string;
    Name: string;
    Description: string;
}

// API Result Types

export interface SearchResult {
    bestMatches: BestMatch[]
}
  
export interface BestMatch {
    "1. symbol": string
    "2. name": string
    "3. type": string
    "4. region": string
    "5. marketOpen": string
    "6. marketClose": string
    "7. timezone": string
    "8. currency": string
    "9. matchScore": string
}

export interface GlobalQuoteResponse {
    "Global Quote": GlobalQuote
}

export interface GlobalQuote {
    "01. symbol": string
    "02. open": string
    "03. high": string
    "04. low": string
    "05. price": string
    "06. volume": string
    "07. latest trading day": string
    "08. previous close": string
    "09. change": string
    "10. change percent": string
}
