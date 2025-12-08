"use client";
import ADXChart from "@/src/components/Charts/ADX/ADXChart";
import SuggestionList from "@/src/components/MarketList/SuggestionList";
import TradeSettings from "@/src/components/TradeConfig/TradeSettings";
import Image from "next/image";


export default function ChartsPattern2() {
  return (
    <div className="bg-[#06001C]">
      <div className="logo">
        <Image
          src="/images/Group 48095791.png"
          alt="logo"
          width="50"
          height="30"
        />
      </div>
      <SuggestionList />
      <ADXChart />
      <TradeSettings />
    </div>
  )
}