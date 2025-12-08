'use client'
import ReactECharts from "echarts-for-react";
import { useMemo, useState } from "react";
import { getADXData, TimeFrame } from "@/public/mock/adx_data";
import DropdownMenu from "../../Common/DropdownMenu";
import { candlestickData } from "@/public/mock/candlestick_data"; 

const formatVolume = (value: number) => {
    if (value >= 1e9) {
        return (value / 1e9).toFixed(0) + 'B';
    }
    if (value >= 1e6) {
        return (value / 1e6).toFixed(0) + 'M';
    }
    if (value >= 1e3) {
        return (value / 1e3).toFixed(0) + 'K';
    }
    return value.toString();
};

function ADXChart() {
    const [activeTab, setActiveTab] = useState<TimeFrame>('1 Day');
    const [hoveredAdx, setHoveredAdx] = useState<number | null>(null);
    const chartData = getADXData(activeTab);

    const tabs: TimeFrame[] = ['1 Day', '1 Week', '1 Month'];

    const limitedPriceData = candlestickData.slice(-30);
    const priceDates = limitedPriceData.map(item => item.time);
    const candlestickValues = limitedPriceData.map(item => [item.open, item.close, item.low, item.high]);
    const volumeValues = limitedPriceData.map(item => item.volume);
    
    const adxData = chartData.map(item => item.adxValue).slice(-priceDates.length);
    
    const upColor = '#00FFAE'; 
    const downColor = '#FF454B'; 

    const currentPrice = limitedPriceData.length > 0 
        ? limitedPriceData[limitedPriceData.length - 1].close.toLocaleString('vi-VN', { maximumFractionDigits: 2 })
        : 'N/A';
    const totalVolume = limitedPriceData.reduce((sum, item) => sum + item.volume, 0).toLocaleString('vi-VN', { maximumFractionDigits: 0 });

    const price = currentPrice;
    
    const currentAdx = adxData.length > 0 ? Math.round(adxData[adxData.length - 1]).toString() : 'N/A';
    
    const intervalOptions = ["30M", "1H", "4H", "1D"];
    const [intervalIndicator, setIntervalIndicator] = useState("30M");

    const CANDLE_GRID_TOP_STR = '5%';
    const CANDLE_GRID_HEIGHT_STR = '55%';
    const ADX_GRID_HEIGHT_STR = '30%';
    const GRID_GAP_STR = '9%';

    const fixedStep = 5000;
    const totalSteps = 6;

    const actualMinVolume = Math.min(...volumeValues);
    const actualMaxVolume = Math.max(...volumeValues);

    let finalMinVolume = Math.floor(actualMinVolume / fixedStep) * fixedStep;
    let finalMaxVolume = finalMinVolume + (totalSteps * fixedStep);

    while (finalMaxVolume < actualMaxVolume) {
        finalMinVolume += fixedStep;
        finalMaxVolume += fixedStep;
    }
    
    const volumeLabels = [0, 1, 2, 3, 4, 5, 6].map(k => {
        const value = finalMinVolume + (k * fixedStep); 
        const formattedValue = formatVolume(value);
        const relativePosition = (totalSteps - k) / totalSteps * 100;

        return {
            label: formattedValue,
            position: `${relativePosition}%`
        };
    });

    const onChartEvents = {
        updateAxisPointer: (event: any) => {
            const dataIndex = event.dataIndex ?? event.batch?.[0]?.dataIndex;
            if (typeof dataIndex === 'number' && adxData[dataIndex] !== undefined) {
                setHoveredAdx(adxData[dataIndex]);
            }
        },
        globalout: () => {
            setHoveredAdx(null);
        }
    };

    const option = useMemo(() => ({
        backgroundColor: 'transparent',
    
        grid: [
            { 
                left: 0, right: 0, top: CANDLE_GRID_TOP_STR, height: CANDLE_GRID_HEIGHT_STR, 
                containLabel: true 
            },
            { 
                left: 0, right: 0, top: '69%', height: ADX_GRID_HEIGHT_STR, 
                containLabel: true
            }
        ],

        xAxis: [
            {
                type: 'category',
                data: priceDates, 
                gridIndex: 0,
                scale: true,
                boundaryGap: true,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false }, 
                axisPointer: { 
                    show: true,
                    color: '#426BFF',
                    type: 'line', 
                    snap: true,
                    lineStyle: {
                        color: '#426BFF',
                        width: 1,
                        type: 'solid'
                    },
                    link: [{ xAxisIndex: 1 }] 
                }
            },
            { 
                type: 'category',
                data: priceDates, 
                gridIndex: 1,
                scale: true,
                boundaryGap: true,
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false },
                axisPointer: { 
                    show: true,
                    type: 'line', 
                    snap: true,
                    lineStyle: {
                        color: '#426BFF',
                        width: 1,
                        type: 'solid'
                    },
                    link: [{ xAxisIndex: 0 }] 
                }
            }
        ],

        yAxis: [
            { 
                scale: true,
                position: 'left', 
                splitLine: { show: false },
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: false },
                gridIndex: 0
            },
            { 
                type: 'value',
                min: 0,
                max: 100, 
                position: 'right',
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: { show: false }, 
                axisLabel: { show: false },
                interval: 50, 
                gridIndex: 1,
                axisPointer: {
                    show: false
                }
            },
            { 
                type: 'value',
                scale: true,
                position: 'right', 
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: { show: false, lineStyle: { color: '#353535' } },
                axisLabel: { show: false },
                gridIndex: 0,
                min: finalMinVolume,
                max: finalMaxVolume,
            }
        ],
        
        series: [
            {
                name: 'Candlestick',
                type: 'candlestick',
                data: candlestickValues,
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upColor,
                    borderColor0: downColor
                },
                barMaxWidth: '65%',
                barMinHeight: 2,
                xAxisIndex: 0, 
                yAxisIndex: 0, 
                z: 1
            },
            {
                name: 'Volume',
                type: 'bar',
                data: volumeValues.map((vol, index) => ({
                    value: vol,
                    itemStyle: {
                        color: '#4E4E4E',
                        opacity: 1
                    }
                })),
                xAxisIndex: 0, 
                yAxisIndex: 2, 
                barGap: '0%', 
                z: 0 
            },
            {
                name: 'ADX',
                type: 'line',
                data: adxData, 
                smooth: true,
                lineStyle: { width: 1.5, color: '#426BFF'},
                showSymbol: false,
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            { offset: 0, color: "rgba(91, 127, 255, 0.6)" },
                            { offset: 0.4, color: "rgba(45, 74, 158, 0.3)" },
                            { offset: 1, color: "rgba(10, 22, 40, 0)" },
                        ],
                    },
                },
                markLine: {
                    symbol: "none",
                    animation: false,
                    data: [
                        { yAxis: 0, label: { show: false }, lineStyle: { color: '#426BFF', width: 0.5, opacity: 1, type: 'solid' } }, 
                        { yAxis: 50, label: { show: false }, lineStyle: { color: '#426BFF', width: 0.5, opacity: 1, type: 'solid' } }, 
                        { yAxis: 100, label: { show: false }, lineStyle: { color: '#426BFF', width: 0.5, opacity: 1, type: 'solid' } }, 
                        
                        ...(hoveredAdx !== null ? [{
                            yAxis: hoveredAdx,
                            lineStyle: {
                                color: '#426BFF',
                                width: 1,
                                type: 'solid'
                            },
                            label: { show: false }
                        }] : [])
                    ] 
                },
                xAxisIndex: 1, 
                yAxisIndex: 1, 
                z: 2
            },
        ]
    }), [priceDates, candlestickValues, volumeValues, adxData, limitedPriceData, finalMinVolume, finalMaxVolume, hoveredAdx]); 

    return (
        <div className="p-6 bg-black min-h-screen">
            <div className="flex justify-between items-center text-white text-[10px] font-mono pb-2">
                <div className="flex gap-2 text-[10px]">
                    <span className="">Price: <span className="text-white font-bold">${price}</span></span>
                    <span className=" lm-2px">ADX: <span className="text-white font-bold">{currentAdx}</span></span>
                    <span className=" lm-2px">Volume: <span className="text-white font-bold">{totalVolume}</span></span>
                </div>
                <DropdownMenu
                    label=""
                    options={intervalOptions}
                    value={intervalIndicator}
                    onChange={setIntervalIndicator}
                    className="w-[60px] font-bold"
                />
            </div>
            <div className="p-4 rounded-lg border border-[#353535] bg-[#0E0E0E] w-full h-[400px]">
                <div className="flex w-full h-full bg-black">
                    <div className="rounded-lg w-[90%] h-full flex flex-col"> 
                        <ReactECharts
                            option={option}
                            style={{ height: '100%', width: '100%' }}
                            onEvents={onChartEvents}
                            notMerge={false}
                        />
                    </div>
                    
                    <div className="relative w-[10%] h-full"> 
                        <div style={{ height: CANDLE_GRID_TOP_STR }} /> 

                        <div 
                            className="relative w-full"
                            style={{ 
                                height: CANDLE_GRID_HEIGHT_STR, 
                            }} 
                        >
                            {volumeLabels.map((item, index) => (
                                <div 
                                    key={index}
                                    style={{ 
                                        position: 'absolute', 
                                        top: item.position, 
                                        transform: 'translateY(-50%)', 
                                        left: 10 
                                    }} 
                                    className="text-[10px] text-[#9EB3FF]"
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                        
                        <div style={{ height: GRID_GAP_STR }} />

                        <div 
                            className="relative w-full"
                            style={{ 
                                height: ADX_GRID_HEIGHT_STR, 
                            }} 
                        >
                            {hoveredAdx !== null && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: `${hoveredAdx}%`, 
                                        transform: 'translateY(50%)', 
                                        left: 10,
                                        zIndex: 10 
                                    }}
                                    className="text-[10px] font-bold text-white bg-[#426BFF] px-1 py-[1px] rounded shadow-sm"
                                >
                                    {Math.round(hoveredAdx)}
                                </div>
                            )}
                            <div 
                                style={{ position: 'absolute', bottom: 0, transform: 'translateY(50%)', left: 10 }} 
                                className="text-[10px] text-[#9EB3FF]"
                            >
                                0
                            </div>
                            
                            <div 
                                style={{ position: 'absolute', bottom: '50%', transform: 'translateY(50%)', left: 10 }} 
                                className="text-[10px] text-[#9EB3FF]"
                            >
                                50
                            </div>
                            
                            <div 
                                style={{ position: 'absolute', top: 0, transform: 'translateY(-50%)', left: 10 }} 
                                className="text-[10px] text-[#9EB3FF]"
                            >
                                100
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ADXChart;