import { useState } from "react"
import Image from "next/image"

const MessageInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [value, setValue] = useState("")

  const handleSend = () => {
    if (!value.trim()) return
    onSend(value)
    setValue("")
  }

  return (
    <div className="fixed bottom-25 left-0 w-full px-4">
      <div className="flex items-center h-12 bg-[#0E0E0E] border border-[#353535] rounded-lg px-4 py-2 text-sm text-white">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Send Message..."
          className="flex-grow bg-transparent outline-none placeholder-gray-400"
        />
        <button
          onClick={handleSend}
          className="ml-2 w-5 h-5 hover:opacity-80 transition"
        >
          <Image
            src="chatbot/send-icon.svg"
            alt="Send"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

export default MessageInput
