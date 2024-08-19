import { useEffect, useState } from "react";
import { Theme } from "../types/index.types";
import { themeChange } from "theme-change";

export function useUI() {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    useEffect(() => {
        themeChange(false);
    }, [theme]);

    return { theme, setTheme };
}