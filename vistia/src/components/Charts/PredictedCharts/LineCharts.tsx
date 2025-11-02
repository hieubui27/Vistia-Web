'use client';

import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

// Định nghĩa kiểu cho ECharts option
type EChartsOption = echarts.EChartsOption;

interface BaseLineChartProps {
  /**
   * Đối tượng cấu hình của ECharts
   */
  option: EChartsOption;
  /**
   * ClassName để định dạng kích thước cho div chứa chart
   * (ví dụ: 'h-64 w-full')
   */
  className?: string;
}

/**
 * Một component ECharts cơ bản, có thể tái sử dụng.
 * Nó nhận vào một 'option' và hiển thị biểu đồ.
 */
const BaseLineChart = ({ option, className }: BaseLineChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    // Chỉ khởi tạo khi ref đã có
    if (chartRef.current) {
      // Khởi tạo chart instance (chỉ 1 lần)
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }

      // Set option cho chart
      chartInstance.current.setOption(option);
    }

    // Xử lý resize
    const resizeChart = () => {
      chartInstance.current?.resize();
    };
    window.addEventListener('resize', resizeChart);

    // Hàm cleanup khi component unmount
    return () => {
      window.removeEventListener('resize', resizeChart);
      chartInstance.current?.dispose(); // Huỷ instance để tránh rò rỉ bộ nhớ
      chartInstance.current = null;
    };
  }, [option]); // Chạy lại effect khi option thay đổi (ví dụ: data mới)

  return (
    <div
      ref={chartRef}
      className={className || 'w-full h-full'} // Class mặc định
    />
  );
};

export default BaseLineChart;