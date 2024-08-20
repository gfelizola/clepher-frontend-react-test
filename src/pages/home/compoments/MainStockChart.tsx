import { fetchTimeSeries } from '@/api/stock-api';
import { useStock } from '@/hooks/stock';
import { TimeSeriesDailyResponse } from '@/types/index.types';
import { useQuery } from '@tanstack/react-query';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

const TIME_SERIES_LIMIT = 10;

const chartConfig: ApexOptions = {
    chart: {
        height: 350,
        background: '#ffffff',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: true,
    },
    yaxis: [
        {
            title: {
                text: 'Stock Price',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Volume',
            },
        },
    ],
};

interface ChartItem {
    x: string;
    y: string;
}

const formatSeries = (data: TimeSeriesDailyResponse): ApexAxisChartSeries => {
    if (!data || !data['Time Series (Daily)']) return [];

    const stockPriceSeries: ChartItem[] = [];
    const volumeSeries: ChartItem[] = [];

    Object.entries(data['Time Series (Daily)'])
        .slice(0, TIME_SERIES_LIMIT)
        .forEach(([key, value]) => {
            const price = value['4. close'];
            const volume = value['5. volume'];

            stockPriceSeries.push({ x: key, y: price });
            volumeSeries.push({ x: key, y: volume });
        });

    const series = [
        {
            name: 'Stock Price',
            data: stockPriceSeries,
            type: 'line',
        },
        {
            name: 'Volume',
            data: volumeSeries,
            type: 'line',
        },
    ];

    // console.log('series', series);

    return series;
};

export const MainStockChart = () => {
    const { actualStock } = useStock();

    const { data, isLoading } = useQuery<TimeSeriesDailyResponse>({
        queryKey: ['stock', actualStock],
        queryFn: async () => fetchTimeSeries(actualStock),
    });

    if (!data || isLoading) return <div className="skeleton w-full h-20"></div>;

    const series: ApexAxisChartSeries = formatSeries(data);

    return <ReactApexChart type="line" options={chartConfig} series={series} />;
};
