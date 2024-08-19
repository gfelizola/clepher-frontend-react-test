import { Theme } from '@/types/index.types';
import { useUI } from '@/hooks/ui';

import { THEME_STORAGE_KEY } from '@/utils/constants';

export const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useUI();

    const handleThemeChange = (newTheme: Theme) => {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);

        setTheme(newTheme);
    };

    console.log('ThemeSelector', theme);

    return (
        <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                {Object.values(Theme).map((iTheme) => (
                    <li key={iTheme}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={iTheme}
                            value={iTheme}
                            onChange={() => handleThemeChange(iTheme)}
                            checked={theme === iTheme}
                            data-choose-theme
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
