"use client";
import { useState } from "react";
import Image from "next/image";
import ADXChart from "@/src/components/Charts/ADX/ADXChart";
import SuggestionList from "@/src/components/MarketList/SuggestionList";
import TradeSettings from "@/src/components/TradeConfig/TradeSettings";
import DropdownMenu from "@/src/components/Common/DropdownMenu";

export default function ChartsPattern2() {
  const [minOption, setMinOption] = useState("30M");
  const [hourOption, setHourOption] = useState("1H");
  const [dayOption, setDayOption] = useState("1D");

  return (
    <div className="bg-[#06001C] min-h-screen p-6">
      <div className="logo mb-4">
        <Image
          src="/images/Group 48095791.png"
          alt="logo"
          width="60"
          height="30"
        />
      </div>
      <div className="w-full flex flex-col items-center font-space-mono">
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
        <SuggestionList
        />
        <ADXChart />
        <TradeSettings />
        <p className="text-[#868686] text-[8px] text-center mt-2 max-w-70">
          Please keep in mind that these are only suggestions, consider them carefully before trading!
        </p>
      </div>

    </div>
  )
}