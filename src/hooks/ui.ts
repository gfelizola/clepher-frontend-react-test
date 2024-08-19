import { useEffect, useState } from "react";
import { Theme } from "../types/index.types";
import { THEME_STORAGE_KEY } from "@/utils/constants";

export function useUI() {
    const [theme, setInternalTheme] = useState<Theme>(Theme.DARK);

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        setInternalTheme(newTheme);
    }

    useEffect(() => {
        const savedTheme: string | null = localStorage.getItem(THEME_STORAGE_KEY);
        console.log(savedTheme);
        if (savedTheme) {
            setTheme(savedTheme as Theme);
        }
    }, [theme]);

    return { theme, setTheme };
}