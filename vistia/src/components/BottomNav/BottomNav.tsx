"use client"
import { usePathname, useRouter } from "next/navigation"
import { NavButton } from "./NavButton"
import Image from "next/image"
import { useState } from "react"
import SwapModal from "../SwapModal/SwapModal"

export const BottomNav = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [spinning, setSpinning] = useState(false)
  const [showModal, setShowModal] = useState(false);

  const navItems = [
    { label: "Home", iconWhite: "/button/home_icon_white.svg", iconBlue: "/button/home_icon_blue2.svg", path: "/" },
    { label: "Analysis", iconWhite: "/button/analysis_icon_white.svg", iconBlue: "/button/analysis_icon_blue.svg", path: "/analysis" },
    { label: "AI", iconWhite: "/button/ai_icon_white.svg", iconBlue: "/button/ai_icon_blue2.svg", path: "/ai" },
    { label: "Chatbot", iconWhite: "/button/chatbot_icon_white.svg", iconBlue: "/button/chatbot_icon_blue3.svg", path: "/chatbot" },
  ]

  const handleReload = () => {
    setSpinning(false)
    requestAnimationFrame(() => {
      setSpinning(true)
    })
    if(pathname.startsWith("/heatmap")){
        setShowModal(true)
    }else{
      router.push("/swap")
    }
    

  }
  const handleConfirmNavigation = () => {
    setShowModal(false);
    router.push("/swap");
  };
  

  return (
    <>
    <SwapModal 
        isOpen={showModal}                    
        onClose={() => setShowModal(false)}  
        onConfirm={handleConfirmNavigation}
      />
    <div className="fixed bottom-[-8pt] left-1/2 z-50 -translate-x-1/2">
      <div className="relative flex w-[380px] h-[84px] items-center justify-between rounded-[15px] bg-[#0E0E0E] border border-[#565656] border-2 shadow-md px-6">
        {/* left group */}
        <div className="flex gap-6">
          {navItems.slice(0, 2).map((item, index) => (
            <NavButton key={index} item={item} pathname={pathname} />
          ))}
        </div>

        {/* middle reload button */}
        <button
          onClick={handleReload}
          className="absolute -top-3 left-1/2 flex h-[69px] w-[69px] -translate-x-1/2 items-center justify-center rounded-full bg-[#000000] border border-[#426BFF] border-3"
        >
          <Image
            src="/button/reload_icon.svg"
            alt="Reload"
            width={52}
            height={52}
            className="relative"
            style={{
              animation: spinning ? "spinOnce 1s ease-out" : undefined,
            }}
            onAnimationEnd={() => setSpinning(false)}
          />
          {/* rotate keyframes */}
          <style jsx>{`
            @keyframes spinOnce {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
        </button>

        {/* right group */}
        <div className="flex gap-6">
          {navItems.slice(2).map((item, index) => (
            <NavButton key={index + 2} item={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default BottomNav
