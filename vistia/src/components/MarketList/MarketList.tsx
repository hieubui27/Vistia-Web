"use client"
import { useEffect, useState } from "react"
import Coin from "./Coin"

export default function MarketList() {
  const [coins, setCoins] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1"
      )
      const data = await res.json()
      setCoins(data)
    }
    fetchData()
  }, [])

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-white text-xl font-space-mono font-bold font-size-12 mb-3">Market List</h2>
      <div className="space-y-3">
        {coins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            change={coin.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  )
}


