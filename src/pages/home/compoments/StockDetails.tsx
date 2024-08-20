import { fetchGlobalQuote, fetchStockDetails } from '@/api/stock-api';
import { useStock } from '@/hooks/stock';
import { GlobalQuote } from '@/types/index.types';
import { useQuery } from '@tanstack/react-query';

export const StockDetails = () => {
    const { actualStock } = useStock();

    const { data: stockDetailData, isLoading: isDetailLoading } = useQuery({
        queryKey: ['stock-details', actualStock],
        queryFn: () => fetchStockDetails(actualStock),
    });

    const { data: stockLastPrice, isLoading: isPriceLoading } = useQuery({
        queryKey: ['stock-last-price', actualStock],
        queryFn: () => fetchGlobalQuote(actualStock),
    });

    const currentQuote: GlobalQuote | undefined = stockLastPrice?.['Global Quote'];

    if (isDetailLoading || isPriceLoading)
        return <div className="card skeleton h-20 rounded-md"></div>;

    return (
        <div className="stock-details card">
            <h2 className="card-title mb-4">Stock Details</h2>
            <h3 className="text-primary font-bold text-2xl">{stockDetailData?.Symbol}</h3>
            <p>{stockDetailData?.Name}</p>
            <p className="gap-4">
                <span className="text-primary mr-4">Last price</span>
                <span className="text-lg mr-2">$ {currentQuote?.['05. price']}</span>
                <span className="text-sm">({currentQuote?.['10. change percent']})</span>
            </p>
        </div>
    );
};
