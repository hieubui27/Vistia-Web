"use client"
import { useEffect, useState } from "react"

const useBinancePrice = (symbol: string) => {
  const [data, setData] = useState<{ price: string; change: string }>({ price: "", change: "" })

  useEffect(() => {
    const fetchPrice = async () => {
      const res = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
      const json = await res.json()
      setData({ price: json.lastPrice, change: json.priceChangePercent })
    }
    fetchPrice()
    const interval = setInterval(fetchPrice, 10000)
    return () => clearInterval(interval)
  }, [symbol])

  return data
}

export default useBinancePrice
