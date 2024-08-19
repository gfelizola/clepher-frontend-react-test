import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
    return (
        <header className="navbar bg-base-100">
            <h1>Clepher Test</h1>
            <ThemeSelector />
        </header>
    );
};
