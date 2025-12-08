"use client";
import { useState } from "react";
import Image from "next/image";
import DropdownMenu from "../Common/DropdownMenu";

interface SuggestionItem {
  no: number;
  id: string;
  symbol: string;
  icon: string;
  time: string;
  date: string;
}

const MOCK_DATA: SuggestionItem[] = [
  { no: 2, id: "bitcoin", symbol: "BTC", icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", time: "00:00", date: "17.03" },
  { no: 3, id: "ethereum", symbol: "ETH", icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", time: "00:00", date: "17.03" },
  { no: 4, id: "polkadot", symbol: "DOT", icon: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png", time: "00:00", date: "17.03" },
  { no: 5, id: "bitcoin", symbol: "BTC", icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", time: "00:00", date: "17.03" },
  { no: 6, id: "bitcoin", symbol: "BTC", icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", time: "00:00", date: "17.03" },
  { no: 7, id: "bitcoin", symbol: "BTC", icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", time: "00:00", date: "17.03" },
];

export default function SuggestionList() {
  const [minOption, setMinOption] = useState("30M");
  const [hourOption, setHourOption] = useState("1H");
  const [dayOption, setDayOption] = useState("1D");

  return (
    <div className="w-full max-w-md mx-auto p-4 font-space-mono">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-[16px] font-bold tracking-wide">Suggestion</h2>
        
        <div className="flex gap-2">
          <DropdownMenu
            label=""
            options={["15M", "30M", "45M"]}
            value={minOption}
            onChange={setMinOption}
            className="w-[70px] font-bold"
          />
          <DropdownMenu
            label=""
            options={["1H", "2H", "4H"]}
            value={hourOption}
            onChange={setHourOption}
            className="w-[60px] font-bold"
          />
          <DropdownMenu
            label=""
            options={["1D", "3D", "1W"]}
            value={dayOption}
            onChange={setDayOption}
            className="w-[60px] font-bold"
          />
        </div>
      </div>

      <div className="bg-black border border-[#353535] rounded-3xl p-5 shadow-lg">
        <div className="grid grid-cols-[15%_40%_45%] mb-4 px-2">
          <div className="text-center text-[10px] font-bold text-white tracking-widest">No</div>
          <div className="text-center text-[10px] font-bold text-white tracking-widest pl-2">Token</div>
          <div className="text-center text-[10px] font-bold text-white tracking-widest">Discovered on</div>
        </div>

        <div className="h-[1px] w-full bg-[#353535] mb-4 opacity-50"></div>

        <div className="flex flex-col gap-4">
          {MOCK_DATA.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-[15%_40%_45%] items-center px-2 py-1">
                <div className="text-white text-[12px] font-bold text-center">
                  {item.no}
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden ml-4 shrink-0">
                    <Image 
                        src={item.icon} 
                        alt={item.symbol} 
                        fill 
                        sizes="24px"
                        className="object-cover"
                    />
                  </div>
                  <span className="text-[#426BFF] text-[12px] font-bold tracking-wider">
                    {item.symbol}
                  </span>
                </div>

                <div className="text-center text-white font-mono text-[11px] tracking-widest">
                  {item.time} <span className="text-gray-500 mx-1">|</span> {item.date}
                </div>
              </div>
              
              {index < MOCK_DATA.length - 1 && (
                 <div className="h-[1px] w-full bg-[#353535]/30 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}