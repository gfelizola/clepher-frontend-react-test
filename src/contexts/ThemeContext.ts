import { createContext } from "react";
import { Theme, ThemeContextType } from "../types/index.types";

const ThemeContext = createContext<ThemeContextType>({ 
    theme: Theme.DARK, 
    setTheme: () => { } 
});

export default ThemeContext