'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { useCoin } from '@/src/context/HeatmapCoinContext' 
import MOCK_DATA from '@/public/mock/heatmap_data'
import SwapModal from '../SwapModal/SwapModal'
import { useRouter } from 'next/navigation'

interface CoinRsiData {
  id: string;
  name: string;
  image: string;
  rsi_prev: number;
  rsi_now: number;

  uniqueId: string;
  rsi: number;

  dateStr: string;
  timeStr: string;
}
export default function TopRsiWidget() {
  const [activeTab, setActiveTab] = useState<'OVERSOLD' | 'OVERBOUGHT'>('OVERSOLD')
  const { setSelectedCoin } = useCoin()
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const displayData = useMemo(() => {
    const data = [...MOCK_DATA]

    if (activeTab === 'OVERSOLD') {
      return data.sort((a, b) => a.rsi - b.rsi).slice(0, 3)
    } else {
      return data.sort((a, b) => b.rsi - a.rsi).slice(0, 3)
    }
  }, [activeTab])
  const THEME = {
    OVERSOLD: {
      label: 'Top Over Sold',
      activeColor: 'text-[#01B792]',
      rsiColor: 'text-[#01B792]'
    },
    OVERBOUGHT: {
      label: 'Top Over Bought',
      activeColor: 'text-[#FF454B]',
      rsiColor: 'text-[#FF454B]'
    }
  }
  const clickHandle = (clickedItem:CoinRsiData) =>{
    setSelectedCoin(clickedItem)
    setShowModal(true)
    
  }

  const handleConfirmNavigation = () => {
    setShowModal(false)
    router.push('/swap')
  }

  return (
    <div className=" bg-[#0E0E0E] border border-[#353535] rounded-3xl p-6 font-sans mb-10 m-4">
       <SwapModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmNavigation}
        signal={activeTab}
      />
      <div className="flex justify-between items-center mb-8 relative">
        <div 
          onClick={() => setActiveTab('OVERSOLD')}
          className={`cursor-pointer text-center w-40 text-[14px] tracking-widest font-bold transition-all duration-300 pb-2 border-b-2
            ${activeTab === 'OVERSOLD' 
              ? `${THEME.OVERSOLD.activeColor}` 
              : 'text-gray-500 border-transparent hover:text-gray-300'}`}
        >
          Top Over Sold
        </div>
        <div 
          onClick={() => setActiveTab('OVERBOUGHT')}
          className={`cursor-pointer text-center text-[14px] font-bold tracking-widest transition-all duration-300 pb-2 border-b-2
            ${activeTab === 'OVERBOUGHT' 
              ? `${THEME.OVERBOUGHT.activeColor} ` 
              : 'text-gray-500 border-transparent hover:text-gray-300'}`}
        >
          Top Over Bought
        </div>
      </div>

      <div className="flex flex-col gap-7 p-2">
        {displayData.map((item) => (
          <div 
            key={item.uniqueId}
            onClick={()=> clickHandle(item)}
            className="flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 relative shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <Image 
                   src={item.image} 
                   alt={item.name} 
                   fill 
                   className="object-cover"
                 />
              </div>
              
              <div className="flex flex-col">
                <span className="text-white font-bold text-[12px] tracking-wider">
                  {item.name}/USDT
                </span>
                <span className={`text-[11px] font-bold font-mono ${
                  activeTab === 'OVERSOLD' ? THEME.OVERSOLD.rsiColor : THEME.OVERBOUGHT.rsiColor
                }`}>
                  RSI: {Math.round(item.rsi)}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end text-right">
              <span className="text-white font-mono text-[11px] font-medium tracking-wide">
                {item.dateStr}
              </span>
              <span className="text-white font-mono text-[11px]">
                {item.timeStr}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent 
        ${activeTab === 'OVERSOLD' ? 'via-[#00E5CC]/20' : 'via-[#FF4D4D]/20'} 
        to-transparent blur-md`} 
      />
    </div>
  )
}