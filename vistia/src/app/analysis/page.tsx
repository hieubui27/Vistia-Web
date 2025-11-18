'use client'
import { useState } from "react"
import Image from "next/image"
import Card from "../../components/Common/Card"
import DropdownMenu from "../../components/Common/DropdownMenu"
import IconButton from "../../components/Common/IconButton"

export default function AnalysisPage() {
  const [cex, setCex] = useState("BINANCE")
  const [dex, setDex] = useState("")
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  return (
    <div
      className="min-h-screen text-white font-space-mono px-4 py-8"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover, contain",
        backgroundPosition: "center, top",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="grid grid-cols-[43%_57%]">
        <Card title="Centralized Exchange"
          onClick={() => setSelectedCard("cex")}
          className={`mb-8 mr-1 cursor-pointer transition-all duration-300 
            ${selectedCard === "cex"
              ? "bg-[#000B32]! border-[#426BFF]! text-white! shadow-[0_0_10px_rgba(0,255,255,0.3)] "
              : ""}
          `}
        >
          <div className="flex justify-center gap-4 ">
            <DropdownMenu
              label="Centralized Exchange"
              options={["BINANCE", "OKX", "BYBIT"]}
              value={cex}
              onChange={setCex}
            />

          </div>
        </Card>
        <Card
          title="Decentralized Exchange"
          onClick={() => setSelectedCard("dex")}
          className={`mb-8 ml-1 cursor-pointer transition-all duration-300 
            ${selectedCard === "dex"
              ? "bg-[#000B32]! border-[#426BFF]! text-white! shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              : ""}
          `}
        >
          <div className="flex justify-center gap-4">

            <DropdownMenu
              label=""
              options={[]}
              value={dex}
              onChange={setDex}
            />
          </div>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="py-3">
          <h2 className="text-[12px] mb-4 text-white">Single Indicator</h2>
          <Image
            src="/heatmap.svg"
            alt="Heatmap"
            width={512}
            height={129}
            className="w-full min-h-[129px]  rounded-[10px] mb-6 shadow-md"
          />

          <Card>
            <div className="grid grid-cols-4 place-items-center py-3">
              <IconButton label="Heatmap" iconSrc="/analysis/heatmap-icon.svg" path="analysis/heatmap"/>
              <IconButton label="JP Candlestick" iconSrc="/analysis/candlestick-icon.svg" path="/candlestick"/>
              <IconButton label="PSAR" iconSrc="/analysis/psar-icon.svg" path="/psar"/>
              <IconButton label="ADX" iconSrc="/analysis/adx-icon.svg" path="/adx"/>
            </div>
          </Card >
        </div>

        <div className="py-3">
          <h2 className="text-[12px] mb-4 text-white">Confluence</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="min-h-[155px] py-4">
              <div className="flex flex-col item-start w-[33%]">
                <IconButton label="Radar" iconSrc="/analysis/radar-icon2.svg" path="/radar"/>
              </div>
            </Card>
            <Card className="min-h-[155px] py-4">
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
