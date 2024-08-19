import { createContext } from "react";
import { Theme, ThemeContextType } from "../types/index.types";

export const ThemeContext = createContext<ThemeContextType>({ 
    theme: Theme.DARK, 
    setTheme: () => { } 
});