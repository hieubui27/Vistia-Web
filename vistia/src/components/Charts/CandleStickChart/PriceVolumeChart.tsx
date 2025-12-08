// src/components/Charts/Candlestick/PriceVolumeChart.tsx
'use client'
import React, { useMemo } from 'react';
import ReactECharts from "echarts-for-react";
import { CandlestickDataEntry } from "@/public/mock/candlestick_data"; 
import { formatTime } from '@/src/utils/formatTime'; 

interface PriceVolumeChartProps {
    data: CandlestickDataEntry[];
}

const PriceVolumeChart = ({ data }: PriceVolumeChartProps) => {

    const chartData = useMemo(() => {
        const limitedData = data.slice(-30);
        
        const dates = limitedData.map(item => item.time);
        const values = limitedData.map(item => [item.open, item.close, item.low, item.high]);;
        const volumes = limitedData.map(item => item.volume);
        
        return { dates, values, volumes };
    }, [data]);

    const option = useMemo(() => {
        const upColor = '#00FFAE'; 
        const downColor = '#FF454B'; 

        return {
            backgroundColor: 'transparent',
            grid: [
                { 
                    left: '2%',
                    right: '2%',
                    top: '5%',
                    height: '90%', 
                    containLabel: false
                }
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'cross' }
            },
            xAxis: [
                { 
                    type: 'category',
                    data: chartData.dates,
                    axisLine: { onZero: false, lineStyle: { color: '#353535' } },
                    axisLabel: { show: false }, 
                    boundaryGap: true,
                    gridIndex: 0 
                }
            ],
            yAxis: [
                { 
                    scale: true,
                    position: 'right',
                    splitLine: { show: false},
                    axisLine: { show: false },
                    axisLabel: { color: '#fff', fontSize: 10, formatter: (value: number) => value.toLocaleString('vi-VN', { maximumFractionDigits: 2 }) },
                    gridIndex: 0 
                }
            ],
            series: [
                {
                    name: 'Candlestick',
                    type: 'candlestick',
                    data: chartData.values,
                    itemStyle: {
                        color: upColor,
                        color0: downColor,
                        borderColor: upColor,
                        borderColor0: downColor
                    },
                    barMaxWidth: '65%', 
                    barMinHeight: 2, 
                    silent: false,
                    xAxisIndex: 0, 
                    yAxisIndex: 0, 
                },
                {
                    name: 'Volume',
                    type: 'bar',
                    data: chartData.volumes.map((vol, index) => ({
                        value: vol,
                        itemStyle: {
                            color: '#4E4E4E',
                            opacity: 1
                        }
                    })),
                    xAxisIndex: 0, 
                    yAxisIndex: 0, 
                    barGap: '0%' 
                }
            ]
        };
    }, [chartData]);

    return (
        <ReactECharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            notMerge={true}
        />
    );
};

export default PriceVolumeChart;