export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    DRACULA = 'dracula',
}

export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

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
  