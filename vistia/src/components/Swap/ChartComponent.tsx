import { useState } from "react";
import LineChart from "../Charts/SwapPage/LineChart"
import { rsiData, psarData, adxData } from "@/public/mock/dynamic_data";
import { ConfigProvider, theme, Select } from "antd";
const ChartComponent = () => {
    const [selectedChartKey, setSelectedChartKey] = useState('rsi');
    const handleChange = (value: string) => {
        setSelectedChartKey(value);
    };
    let data
    switch (selectedChartKey) {
        case 'rsi':
            data = rsiData
            break;
        case 'psar':
            data = psarData
            break;
        case 'adx':
            data = adxData
            break;
    }
    return (
        <>
            <div className="bg-[#191F33] p-2 rounded-[8px]">
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,
                        token: {
                            colorPrimary: '#9EB3FF',
                            colorBgContainer: '#000',
                            borderRadius: 8,
                        },
                    }}
                >
                    <Select
                        value={selectedChartKey}
                        variant="borderless"
                        className="bg-black rounded-[5px] h-[28px]! w-[80px]"
                        onChange={handleChange}
                        options={[
                            { value: 'rsi', label: <span className="text-[#9EB3FF]! text-[14px] font-bold!">RSI</span> },
                            { value: 'psar', label: <span className="text-[#9EB3FF]! text-[14px] font-bold!">PSAR</span> },
                            { value: 'adx', label: <span className="text-[#9EB3FF]! text-[14px] font-bold!">ADX</span> },
                        ]}
                    />
                </ConfigProvider>
                <div className="mt-2">
                    {data && <LineChart
                        data={data}
                        strokeColor="#426BFF"
                    />}
                </div>
                

            </div>

        </>
    )
}

export default ChartComponent;