
'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export interface CoinData {
  id: string
  name: string
  image: string
  rsi_now: number
  rsi_prev: number
}


interface CoinContextType {
  selectedCoin: CoinData | null
  setSelectedCoin: (coin: CoinData | null) => void
}

const CoinContext = createContext<CoinContextType | undefined>(undefined)



export function CoinProvider({ children }: { children: ReactNode }) {
  const [selectedCoin, setSelectedCoin] = useState<CoinData | null>(null)

  return (
    <CoinContext.Provider value={{ selectedCoin, setSelectedCoin }}>
      {children}
    </CoinContext.Provider>
  )
}

export function useCoin() {
  const context = useContext(CoinContext)
  if (!context) throw new Error('useCoin must be used within a CoinProvider')
  return context
}