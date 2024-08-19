import { ThemeSelector } from './ThemeSelector';

export const Header: React.FC = () => {
    return (
        <header className="navbar bg-zinc-900 p-4">
            <h1 className="flex-1">Clepher Test</h1>
            <ThemeSelector />
        </header>
    );
};
