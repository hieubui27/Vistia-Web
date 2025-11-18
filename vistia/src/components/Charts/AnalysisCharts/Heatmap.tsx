'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import DropdownMenu from '../../Common/DropdownMenu'
import { CoinData, useCoin } from '@/src/app/context/HeatmapCoinContext';


function getRSIColor(rsi: number): string {
  const startR = 0;
  const startG = 186;
  const startB = 186;
  const endR = 163;
  const endG = 0;
  const endB = 3;
  const t = Math.max(0, Math.min(100, rsi)) / 100;
  const r = Math.round(startR + (endR - startR) * t);
  const g = Math.round(startG + (endG - startG) * t);
  const b = Math.round(startB + (endB - startB) * t);
  return `rgb(${r},${g},${b})`;
}

export default function Heatmap() {
  const [coins, setCoins] = useState<CoinData[]>([])
  const [height, setHeight] = useState(0)
  const [chartWidth, setChartWidth] = useState(0)
  const [rsiIndicator, setRsiIndicator] = useState("RSI7")
  const [intervalIndicator, setIntervalIndicator] = useState("30M")
  const [highlightCoinId, setHighlightCoinId] = useState<string | null>(null);


  const { selectedCoin, setSelectedCoin } = useCoin()

  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch('/mock/heatmap_data.json')
      const data = await res.json()
      setCoins(data)
    }
    fetchCoins()
  }, [])

  useEffect(() => {
    if (coins.length === 0) return;
    if (selectedCoin) return;
  
    const btc = coins.find(c =>
      c.name?.toLowerCase() === "bitcoin" ||
      c.id?.toLowerCase() === "bitcoin"
    );
  
    if (btc) setSelectedCoin(btc);
  }, [coins]);


  useEffect(() => {
    if (!chartRef.current) return
    const update = () => {
      setHeight(chartRef.current!.offsetHeight)
      setChartWidth(chartRef.current!.offsetWidth)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scaleY = height / 100
  const divisions = 10
  const coinSize = 20

  const averageRSI = coins.length > 0 ? coins.reduce((sum, c) => sum + c.rsi_now, 0) / coins.length : 0;
  const avgY = height - averageRSI * scaleY;

  return (
    <div className=" my-4 pr-4">
      <div className="flex items-center relative pl-2 pb-4 text-white text-[11px]">
        <span className="absolute tracking-wider">Select analysis indicators</span>
        <div className="flex items-center pt-2 gap-2 ml-auto">
          <DropdownMenu label="" options={["RSI7", "RSI14"]} value={rsiIndicator} onChange={setRsiIndicator} className="w-[70px]" />
          <DropdownMenu label="" options={["30M", "1H", "4H", "1D"]} value={intervalIndicator} onChange={setIntervalIndicator} className="w-[70px]" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="relative w-[40px]" style={{ height }}>
          {Array.from({ length: divisions + 1 }, (_, i) => i * 10).map(rsi => (
            <div key={rsi} style={{ position: 'absolute', bottom: rsi * scaleY, transform: 'translateY(50%)', right: 10 }} className="text-xs text-white">
              <span style={{ color: getRSIColor(rsi) }}>{rsi}</span>
            </div>
          ))}
        </div>

        <div ref={chartRef} className="relative w-full h-[430px] overflow-visible bg-[url('/heatmap/layer.svg'),url('/chatbot/bg-star.png')]">
          {Array.from({ length: divisions + 1 }, (_, i) => i * 10).map(rsi => (
            <div
              key={rsi}
              style={{
                position: 'absolute', bottom: rsi * scaleY, width: '100%',
                background: rsi === 100 || rsi === 70 || rsi === 60 ? '#A30003' : rsi === 40 || rsi === 30 || rsi === 0 ? '#00BABA' : 'rgba(255,255,255,0.15)',
                height: rsi === 100 || rsi === 0 ? '2px' : rsi === 40 || rsi === 60 ? '0.3px' : '1px',
                boxShadow: rsi === 100 ? '0 0 12px #A30003, 0 0 20px #ff6666' : rsi === 0 ? '0 0 12px #00BABA, 0 0 20px #33ffff' : 'none',
              }}
            />
          ))}

          {height > 0 && (
            <>
              <div style={{ position: "absolute", top: avgY, width: "100%", height: "2px", background: "rgba(0, 145, 255, 0.7)" }} />
              <div style={{ position: "absolute", top: avgY - 16, right: 10, color: "rgba(0, 145, 255, 0.7)", fontSize: "9px", fontWeight: "bold" }}>
                Avr: {averageRSI.toFixed(2)}
              </div>
            </>
          )}

          {height > 0 && coins.map((coin, i) => {
              const spacing = chartWidth / (coins.length + 1)
              const x = spacing * (i + 1) - coinSize / 2
              const oldY = height - coin.rsi_prev * scaleY - coinSize / 2
              const newY = height - coin.rsi_now * scaleY - coinSize / 2
              const isUp = coin.rsi_now > coin.rsi_prev
              const isDown = coin.rsi_now < coin.rsi_prev
              const isSelected = highlightCoinId === coin.id;
              const dimOthers = selectedCoin !== null && !isSelected

              return (
                <div key={coin.id}>
                  {isSelected && (isUp || isDown) && (
                    (() => {
                      const upColorStart = "rgba(0, 255, 102, 1)"; const upColorEnd = "rgba(0, 255, 102, 0)";
                      const downColorStart = "rgba(255, 40, 40, 1)"; const downColorEnd = "rgba(255, 40, 40, 0)";
                      const trailBackground = isUp ? `linear-gradient(to bottom, ${upColorStart}, ${upColorEnd})` : `linear-gradient(to top, ${downColorStart}, ${downColorEnd})`;
                      return (<div style={{ position: "absolute", left: x + coinSize / 2 - 2, top: Math.min(oldY, newY), width: 4, height: Math.abs(oldY - newY), background: trailBackground, filter: "blur(2px)", borderRadius: 4, transition: "all 0.5s ease" }} />);
                    })()
                  )}

                  {isSelected && (
                    <>
                      <div style={{ position: "absolute", left: x + coinSize / 2 - 10, top: height - 10 * scaleY - 10, width: 30, height: 30, filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))", pointerEvents: "none" }}><Image src="/heatmap/green-icon.svg" alt="green-icon" width={30} height={30} /></div>
                      <div style={{ position: "absolute", left: x + coinSize / 2 - 10, top: height - 90 * scaleY - 10, width: 30, height: 30, filter: "drop-shadow(0 0 6px rgba(255,255,255,0.8))", pointerEvents: "none" }}><Image src="/heatmap/red-icon.svg" alt="red-icon" width={30} height={30} /></div>
                    </>
                  )}

                  {/* COIN */}
                  <div
                    onClick={() => {
                      if (highlightCoinId === coin.id) {
                          // Click lần 2 → chỉ xoá highlight UI
                          setHighlightCoinId(null);
                          // Không setSelectedCoin(null)
                      } else {
                          // Lưu highlight UI
                          setHighlightCoinId(coin.id);
                  
                          // Lưu coin vào context (để modal, swap page,... dùng)
                          setSelectedCoin(coin);
                      }
                  }}
                  
                    style={{
                      position: "absolute", left: x, top: newY, width: coinSize, height: coinSize, transition: "top 0.5s ease, opacity 0.3s",
                      opacity: dimOthers ? 0.25 : 1,
                      boxShadow: isSelected ? isUp ? "0 0 20px rgba(0,255,100,1)" : isDown ? "0 0 20px rgba(255,40,40,1)" : "0 0 18px white" : "0 0 18px white",
                      borderRadius: "50%", cursor: "pointer",
                    }}
                  >
                    <Image src={coin.image} width={coinSize} height={coinSize} alt={coin.name} className="rounded-full" />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}