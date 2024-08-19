import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import ThemeContext from './contexts/ThemeContext';
import { useUI } from './hooks/ui';
import { Theme } from './types/index.types';
import { THEME_STORAGE_KEY } from './utils/constants';

function App() {
    const { theme, setTheme } = useUI();

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className="app-container h-screen w-screen">
                <Header />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
