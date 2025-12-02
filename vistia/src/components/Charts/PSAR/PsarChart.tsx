import { getPSARData, TimeFrame } from "@/public/mock/Psar_data";
import EChartsReact from "echarts-for-react";
import { useMemo, useState } from "react";

function PsarChart() {
    const [activeTab, setActiveTab] = useState<TimeFrame>('1 Day');
    const chartData = getPSARData(activeTab);

    const tabs: TimeFrame[] = ['1 Day', '1 Week', '1 Month'];
    const labels = chartData.map(item => item.label);
    const lineData = chartData.map(item => item.lineValue);
    const pointData = chartData.map(item => item.pointValue);

    const option = useMemo(() => ({
        backgroundColor: 'transparent',
        grid: {
            top: '10%',
            left: '2%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderColor: '#333',
            textStyle: { color: '#fff' }
        },
        xAxis: {
            type: 'category',
            data: labels,
            show:false,
        },
        yAxis: {
            type: 'value',
            position: 'right',
            min: 'dataMin', 
            max: 'dataMax', 
            splitLine: { show: false }, 
            axisLabel: {
                color: '#fff', 
                formatter: (value: number) => value.toFixed(3) 
            }
        },
        series: [
            {
                name: 'Price',
                type: 'line',
                data: lineData, // Quan trọng: Làm mềm đường cong
                showSymbol: false, // Không hiện chấm trên đường line
                lineStyle: {
                    width: 1,
                    color: '#00C8FF' // Màu cyan giống ảnh
                }
            },
            {
                name: 'PSAR',
                type: 'scatter',
                data: pointData,
                symbol: 'diamond',
                symbolSize: 5,
                itemStyle: {
                    color: '#426BFF'
                }
            }
        ]
    }), [labels, lineData, pointData]);
    return (
        <>
            <div className="psar-chart-container p-4 rounded-lg border border-[#2B2B2B] w-full h-[350px]">
                <div className="button flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                border p-1 pl-4 pr-4 rounded-[5px] font-bold text-[12px] mr-4 transition-colors duration-200
                                ${activeTab === tab
                                    ? 'border-[#426BFF] text-[#426BFF] bg-[#426BFF]/10'
                                    : 'border-[#353535] text-gray-400 hover:border-gray-500'
                                }
                            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="charts">

                </div>
                <EChartsReact
                    option={option}
                    style={{ height: '100%', width: '100%' }}
                    notMerge={true}
                />
            </div>
        </>
    );
}

export default PsarChart;