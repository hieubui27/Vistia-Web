'use client'
import { usePathname } from "next/navigation"
import HomeHeader from "./HomeHeader"
import AIHomeHeader from "./AIHomeHeader"
import AIDetailHeader from "./AIDetailHeader"
import ChatbotHeader from "./ChatbotHeader"

export default function DynamicHeader() {
  const pathname = usePathname()
  let HeaderComponent = null
  let useWrapper = true

  if (pathname === '/ai') {
    HeaderComponent = AIHomeHeader
  } else if (pathname.startsWith('/ai/detail')) {
    HeaderComponent = AIDetailHeader
  } else if (pathname === '/chatbot') {
    HeaderComponent = ChatbotHeader
    useWrapper = false
  } else if (pathname === '/analysis/heatmap') {
  }
  else if (pathname === '/') {
    HeaderComponent = HomeHeader
  }

  if (!HeaderComponent) return null

  return useWrapper ? (
    <div className="sticky top-0 z-20 h-[22vh] w-full bg-black rounded-b-3xl overflow-hidden shadow-[0_30px_40px_#0077FF40] flex flex-col">
      <HeaderComponent />
    </div>
  ) : (
    <HeaderComponent />
  )
}
