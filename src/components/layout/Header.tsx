import clsx from 'clsx';
import { useUI } from '@/hooks/ui';
import { ThemeSelector } from '@/components/layout/ThemeSelector';
import { Theme } from '@/types/index.types';

export const Header: React.FC = () => {
    const { theme } = useUI();

    return (
        <header
            className={clsx(
                'navbar p-4 gap-4 flex-wrap justify-between',
                theme != Theme.LIGHT && 'bg-zinc-900',
                theme == Theme.LIGHT && 'bg-zinc-400',
            )}>
            <img
                src="https://cdn1.clepher.com/wp-content/uploads/2024/07/clepher-logo-white-formerly-cm-min.png"
                alt="Clepher Logo"
                className="h-16 md:order-first"
            />
            <h1 className="title-container grow text-2xl order-last text-center justify-center">
                Clepher Test - Gustavo Felizola
            </h1>

            <ThemeSelector />
        </header>
    );
};
