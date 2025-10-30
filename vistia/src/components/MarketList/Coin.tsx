"use client"
import Image from "next/image"
import { useState } from "react"

interface CoinProps {
  name: string
  symbol: string
  image: string
  price: number
  change: number
}

const Coin = ({ name, symbol, image, price, change }: CoinProps) => {
  const [selected, setSelected] = useState(false)

  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`flex justify-between items-center bg-[#0E0E0E] px-4 py-3 rounded-2xl border border-[#353535] transition-all cursor-pointer ${
        selected ? "border-blue-500" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Image src={image} alt={name} width={37} height={37} />
        <div>
          <p className="text-white font-space-mono font-12 font-bold">{name}</p>
          <p className="text-xs font-space-mono text-gray-400 uppercase font-8">{symbol}</p>
        </div>
      </div>

      <div className="text-right font-space-mono">
        <p className="text-white font-size-10">${price.toLocaleString()}</p>
        <p
          className={`text-xs ${
            change >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {change >= 0 ? "▲" : "▼"} {change.toFixed(2)}%
        </p>
      </div>
    </div>
  )
}

export default Coin
