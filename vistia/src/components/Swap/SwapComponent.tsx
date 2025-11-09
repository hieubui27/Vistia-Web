"use client"
import Image from "next/image";
import SwapBox from "./SwapBox";
import { ConfigProvider,theme } from "antd";
import ChartComponent from "./ChartComponent";

const SwapComponent = () => {
    return (
        <div className="body bg-[#06001C] min-h-screen max-h-screen overflow-y-auto p-4 pt-0 ">
            <div className="header flex justify-between items-center pt-[20px]">
                <div className="logo">
                    <Image
                        src="/images/Group 48095791.png"
                        alt="logo"
                        width="50"
                        height="30"
                    />
                </div>
                <div className="account bg-transparent border border-[#426BFF] p-2 rounded-3xl">
                    <p className="m-0 p-0 text-[#9EB3FF] text-[8px]">
                        0x93j...sf00if-sasdsada
                    </p>
                </div>
            </div>
            <div className="swap mt-8 ">
                <ConfigProvider
                    theme={{
                        algorithm: theme.darkAlgorithm,
                        token: {
                            colorPrimary: '#426BFF',
                            colorBgContainer: '#161616',
                            borderRadius: 8,
                        },
                    }}
                >
                    <SwapBox />
                </ConfigProvider>
            </div>
            <div className="chart mt-10">
                <ChartComponent />
            </div>
        </div>
    )
}

export default SwapComponent;