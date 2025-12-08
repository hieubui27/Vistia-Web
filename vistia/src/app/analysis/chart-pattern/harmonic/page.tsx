// app/page.tsx (hoặc nơi bạn dùng component)
"use client";
import HarmonicCrab from "@/src/components/Charts/HarmonicCrab/HarmonicCrab";
import React, { useState, useEffect } from "react";; // Nhớ import đúng đường dẫn
import { data } from "@/public/mock/mock_data_harmonicCrab.json";
import { ConfigProvider, Select, theme } from "antd";
import Image from "next/image";
import SuggestionList from "@/src/components/MarketList/SuggestionList";
import ADXChart from "@/src/components/Charts/ADX/ADXChart";
const MOCK_DATA = data;
const PATTERNS = [
  { id: 'crab', label: 'Crab', src: '/chart_pattern/Crab.svg' },
  { id: 'butterfly', label: 'Butterfly', src: '/chart_pattern/Butterfly.svg' },
  { id: 'bat', label: 'Bat', src: '/chart_pattern/Bat.svg' },
  { id: 'gartley', label: 'Gartley', src: '/chart_pattern/Gartley.svg' },
];

export default function HomePage() {
  const [chartData, setChartData] = useState<any>(null);
  const [selectedChartKey, setSelectedChartKey] = useState('30M');
  const [selected, setSelected] = useState<string>('crab');
  const handleChange = (value: string) => {
    setSelectedChartKey(value);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setChartData(MOCK_DATA);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#06001C] p-6">
      <Image
        src="/chart_pattern/Logo.svg"
        alt="Chart Pattern Header"
        width={60}
        height={30}
        className="mb-4"
      />
      <div className="flex flex-col items-center space-y-2">
        <div className="menu flex w-full justify-between items-center">
          <h2 className="text-[12px] font-bold">Bullish/Bearish</h2>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              token: {
                colorPrimary: '#FFFFFF',
                colorBgContainer: '#0E0E0E',
                borderRadius: 8,
              },
            }}
          >
            <Select
              value={selectedChartKey}

              variant="borderless"
              className="bg-[#0E0E0E] rounded-[5px] h-[24px]! w-[70px]"
              onChange={handleChange}
              options={[
                { value: '30M', label: <span className="text-[#FFF]! text-[12px] font-bold!">30M</span> },
                { value: '1H', label: <span className="text-[#FFF]! text-[12px] font-bold!">1H</span> },
                { value: '1M', label: <span className="text-[#FFF]! text-[12px] font-bold!">1M</span> },
              ]}
            />
          </ConfigProvider>

          <div className="flex space-x-2">
            {PATTERNS.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => setSelected(pattern.id)}
                className={`
              relative flex items-center justify-center transition-all duration-300
            `}
              >
                <div className={`relative flex item-center justify-center w-[24px] h-[24px] ${selected === pattern.id ? "border border-[#426BFF] rounded-[5px]" : "border border-[#353535] rounded-[5px]"}`}>
                  <Image
                    src={pattern.src}
                    alt={pattern.label}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

        </div>
        <SuggestionList />
        <ADXChart />
        <HarmonicCrab data={chartData} />
        <p className="text-[#868686] text-[8px] text-center mt-2 max-w-70">
          Please keep in mind that these are only suggestions, consider them carefully before trading!
        </p>
      </div>

    </div>
  );
}