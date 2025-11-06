'use client';

import { useMemo } from 'react';
import * as echarts from 'echarts';
import BaseLineChart from './LineCharts';
import PredictedPieChart from './PieChart';

type ChartEntry = {
  time: string;
  actualPrice: number;
  predicted: number | null;
};

const formatTime = (timeString: string) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const AIPredictChart = ({ data }: { data: ChartEntry[] }) => {

  const option = useMemo(() => {
    const xData = data.map(item => formatTime(item.time));
    const actualData = data.map(item => item.actualPrice);


    const predictedData = data.map((item, index) => {
      if (item.predicted === null || item.predicted === undefined) {
        return null;
      }
      const basePrice = index === 0 ? item.actualPrice : data[index - 1].actualPrice;
      const color = item.predicted >= basePrice ? '#00D09C' : '#EF4444';
      return {
        value: item.predicted,
        itemStyle: {
          color: color
        }
      };
    });

    return {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '1%',
        right: '5%',
        bottom: '5%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xData,
        show: false,
        splitLine: { show: false },
        axisLine: { show: false }
      },
      yAxis: {
        type: 'value',
        scale: true,
        position: 'right',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4A4A4A',
            width: 1,
            type: 'dashed'
          }
        },
        axisLabel: {
          color: '#ccc',
          fontWeight: 600,
          fontFamily: 'monospace',
          fontSize: 16,
          formatter: function (value: number) {
            return new Intl.NumberFormat('vi-VN').format(value);
          }
        }
      },
      series: [
        {
          name: 'Actual Price',
          type: 'line',
          data: actualData,
          smooth: false,
          showSymbol: false,
          color: '#3B82F6'
        },
        {
          name: 'Predicted',
          type: 'scatter',
          data: predictedData,
          symbolSize: 8,
          zlevel: 2
        }
      ]
    } as echarts.EChartsOption;

  }, [data]);

  return (
    <div className="relative mt-6 ml-auto mr-auto z-10 w-10/12 h-fit p-4 gradient-border border-[#3C3A3A] bg-linear-to-b  from-black/5 to-black rounded-2xl">
      <h2 className="text-gray-300 text-sm mb-2 pb-2 border-b border-gray-400">Cryptocurrency</h2>
      <BaseLineChart option={option} className="h-64" />
      <PredictedPieChart
        totalTrades={6355}
        winRate={59.31}
        highestGain={3.92}
        highestLoss={11.38} />
    </div>
  );
};

export default AIPredictChart;