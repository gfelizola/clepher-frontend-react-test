export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    DRACULA = 'dracula',
}

export interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}