import { fetchStockDetails } from '@/api/stock-api';
import { useStock } from '@/hooks/stock';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

export const StockDetails = () => {
    const { actualStock } = useStock();

    const { data, isFetching } = useQuery({
        queryKey: ['stock-details', actualStock],
        queryFn: () => fetchStockDetails('IBM'),
    });

    return (
        <div className={clsx('stock-details card', isFetching && 'skeleton')}>
            <div className="card-body">
                <h2 className="card-title">Stock Details</h2>
                <h3 className="text-primary font-bold text-2xl">{data?.Symbol}</h3>
                <p>{data?.Name}</p>
                <p>
                    <span className="text-primary">Last price</span>
                    <span> $123.45</span>
                    <span className="text-sm">(-0.18%)</span>
                </p>
            </div>
        </div>
    );
};
