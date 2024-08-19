import { useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/index.types';
import { THEME_STORAGE_KEY } from '@/utils/constants';
import { ThemeContext } from '@/contexts/ThemeContext';

export function useUI() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('useUI must be used within a ThemeProvider');
    }

    return themeContext;
}

interface ThemeProviderProps {
    children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setInternalTheme] = useState<Theme>(Theme.DARK);

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
        setInternalTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme: string | null = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
            setInternalTheme(savedTheme as Theme);
        }
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
