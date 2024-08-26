import { featchSymbolSearch } from '@/api/stock-api';
import { useStock } from '@/hooks/stock';
import type { BestMatch } from '@/types/index.types';
import { type ChangeEvent, useEffect, useState } from 'react';

const SearchResultItem = ({ symbol, name }: { symbol: string; name: string }) => {
    const { setActualStock } = useStock();

    const handleClick = () => {
        setActualStock(symbol);
    };

    return (
        <li className="btn btn-lg btn-block btn-ghost h-auto justify-between" onClick={handleClick}>
            <span className="text-primary">{symbol}</span>
            <span className="text-sm">{name}</span>
        </li>
    );
};

const EmptySearchResults = () => {
    return (
        <div className="dropdown-content bg-base-300 rounded-box z-[1] w-full p-2 shadow-xl">
            <ul>
                <li className="btn btn-lg btn-block btn-ghost h-auto justify-between">
                    <span className="text-primary">No results found</span>
                </li>
            </ul>
        </div>
    );
};

interface SearchResultsProps {
    items: BestMatch[];
}

const SearchResultsContainer = ({ items }: SearchResultsProps) => {
    if (!items?.length) return <EmptySearchResults />;

    return (
        <div
            tabIndex={1}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-full p-2 shadow-xl">
            <ul>
                {items.map((item) => (
                    <SearchResultItem
                        key={item['1. symbol']}
                        symbol={item['1. symbol']}
                        name={item['2. name']}
                    />
                ))}
            </ul>
        </div>
    );
};

interface SearchInputProps {
    onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    return (
        <label tabIndex={1} role="button" className="form-control w-full">
            <div className="label">
                <span className="label-text">What company you are looking for?</span>
            </div>
            <div className="input input-bordered input-lg flex items-center gap-2 focus:ring-8 focus:ring-primary">
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Input the company name"
                    className="grow"
                    onChange={onSearch}
                    autoComplete="off"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </label>
    );
};

export const Search = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<BestMatch[]>([]);

    useEffect(() => {
        const makeSearch = async () => {
            if (!search || search.length < 3) return;

            // fetch data from API
            const data = await featchSymbolSearch(search);
            setResults(data.bestMatches.slice(0, 5)); // limit to 5 results
        };
        makeSearch();
    }, [search]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value && value.length >= 3 && value != search) setSearch(value);
    };

    return (
        <div className="search-container dropdown w-full">
            <SearchInput onSearch={handleSearchChange} />
            <SearchResultsContainer items={results} />
        </div>
    );
};
