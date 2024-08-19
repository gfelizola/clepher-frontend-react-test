import { StockContext } from '@/contexts/StockContext';
import { useContext, useState } from 'react';

export function useStock() {
    const stockContext = useContext(StockContext);

    if (!stockContext) {
        throw new Error('useStock must be used within a StockProvider');
    }

    return stockContext;
}

interface StockProviderProps {
    children?: React.ReactNode;
}

export const StockProvider = ({ children }: StockProviderProps) => {
    const [actualStock, setActualStock] = useState('IBM');

    return (
        <StockContext.Provider value={{ actualStock, setActualStock }}>
            {children}
        </StockContext.Provider>
    );
};
