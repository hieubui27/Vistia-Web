'use client'
import Image from "next/image"

export default function ChatbotHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[90px]">
      <svg
        viewBox="0 0 375 90"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 H375 V65 L360,85 Q355,90 340,90 H35 Q20,90 15,85 L0,65 Z"
          fill="black"
          stroke="#5B5B5B"
          strokeWidth="2"
        />
      </svg>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="relative w-10 h-10 mb-2">
          <Image
            src="/vistia_logo.svg"
            alt="Vistia Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-sm font-semibold font-space-mono tracking-wide text-gray-200 mt-1">
          AI Chatbot
        </h1>
      </div>
    </header>
  )
}
