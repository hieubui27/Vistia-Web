'use client'
import { useState } from "react"
import MessageBubble from "./MessageBubble"
import MessageInput from "./MessageInput"
import { formatTime } from "../../utils/formatTime"
import { formatDateTitle } from "../../utils/formatDateTitles"
import { handleAIMessage } from "../../services/handleAIMessage"

export default function ChatWindow() {
  const [messages, setMessages] = useState<
    {
      text: string
      sender: "user" | "ai"
      timestamp: string
      date: string
      loading?: boolean
    }[]
  >([])

  const handleSend = (msg: string) => {
    const now = new Date()
    const userMessage = {
      text: msg,
      sender: "user",
      timestamp: formatTime(),
      date: now.toISOString().split("T")[0],
    } as const
    setMessages(prev => [...prev, userMessage])
    handleAIMessage(setMessages, formatTime)
  }

  return (
    <div
      className="flex flex-col flex-grow w-full min-h-screen px-4 pt-30 pb-35 space-y-3"
      style={{
        backgroundImage: "url('/chatbot/bg.png'), url('/chatbot/bg-star.png')",
        backgroundSize: "cover, contain",
        backgroundPosition: "center, top",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {messages.map((msg, i) => {
        const showDate = i === 0 || messages[i - 1].date !== msg.date
        return (
          <div key={i} className="flex flex-col space-y-1">
            {showDate && (
              <div className="text-center text-white text-[14px] text-bold my-2">
                {formatDateTitle(msg.date)}
              </div>
            )}
            <MessageBubble
              text={msg.text}
              sender={msg.sender}
              timestamp={msg.timestamp}
            />
          </div>
        )
      })}
      <MessageInput onSend={handleSend} />
    </div>
  )
}
