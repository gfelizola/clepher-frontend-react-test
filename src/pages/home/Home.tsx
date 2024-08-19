import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Search } from '@/components/Search';
import { MainStockChart } from './compoments/MainStockChart';
import { StockDetails } from './compoments/StockDetails';

export const Home = () => {
    return (
        <div className="page-container">
            <Breadcrumb />

            <div className="divider"></div>

            <div className="search w-full md:w-80 mb-10">
                <Search />
            </div>

            <div className="stock-data-container grid grid-cols-3 gap-4">
                {/* <div className="col-span-3">
                    <EmptyState />
                </div> */}

                <div className="main-chat-container col-span-3 md:col-span-2 card shadow-md p-4 border border-secondary rounded-md">
                    <MainStockChart />
                </div>

                <div className="col-span-3 md:col-span-1 border border-primary shadow-md rounded-md w-full">
                    <StockDetails />
                </div>
            </div>
        </div>
    );
};
