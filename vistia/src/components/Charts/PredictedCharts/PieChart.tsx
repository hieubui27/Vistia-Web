'use client';

import { useMemo, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface TradeStatsProps {
  totalTrades: number;
  winRate: number; 
  highestGain: number; 
  highestLoss: number; 
}
const PredictedPieChart = ({
  totalTrades,
  winRate,
  highestGain,
  highestLoss,
}: TradeStatsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  const winRateValue = winRate;
  const lossRateValue = 100 - winRate;
  const option = useMemo(() => {
    const winColor = '#00F2C3';
    const lossColor = '#FF4D4F';

    return {
      tooltip: {
        show: false,
      },
      title: {
        text: 'Total Trades',
        left: 'center',
        top: '55',
        textStyle: {
          color: '#AAAAAA',
          fontSize: 11,
          fontWeight: 'normal',
          
        },
        subtext: totalTrades.toString(),
        subtextStyle: {
          color: '#FFFFFF',
          fontSize: 18,
          fontWeight: 'bold',
        },
        itemGap: 12
      },
      series: [
        {
          name: 'Trade Stats',
          type: 'pie', 
          radius: ['62%', '80%'], 
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          silent: true,
          emphasis: {
            disabled: true,
          },
          data: [
            {
              value: winRateValue,
              name: 'Win',
              itemStyle: {
                color: winColor,
                shadowColor: winColor,
                shadowBlur: 20,
              },
            },
            {
              value: lossRateValue,
              name: 'Loss',
              itemStyle: {
                color: lossColor,
                shadowColor: lossColor,
                shadowBlur: 20,
              },
            },
          ],
        },
      ],
    } as echarts.EChartsOption;
  }, [totalTrades, winRateValue, lossRateValue]); 
  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }
      chartInstance.current.setOption(option);
    }
    chartInstance.current?.resize({
        width:150,
        height:150
    })
    
  }, [option]);

  return (
    <div className="flex w-full mt-8">
      <div className="w-5/12">
        <div ref={chartRef} className="h-40 w-40" />
      </div>
      <div className="flex p-0 ml-8 flex-col gap-4 justify-center font-mono">
        <p className="text-[10px]">
          <span className="text-white font-bold">Win Rate: </span>
          <span className="font-bold text-[#00F2C3]">{winRate.toFixed(2)}%</span>
        </p>
        <p className="text-[10px]">
          <span className="text-white font-bold">Highest Gain: </span>
          <span className="font-bold text-[#00F2C3]">{highestGain.toFixed(2)}%</span>
        </p>
        <p className="text-[10px]">
          <span className="text-white font-bold">hHighest Loss: </span>
          <span className="font-bold text-[#FF4D4F]">{highestLoss.toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
};

export default PredictedPieChart;