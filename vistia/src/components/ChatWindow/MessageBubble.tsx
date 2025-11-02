import Image from "next/image"

const MessageBubble = ({
  text,
  sender,
  timestamp,
}: {
  text: string
  sender: "user" | "ai"
  timestamp?: string
}) => {
  const isUser = sender === "user"
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      {!isUser && (
        <Image
          src="/vistia_logo.svg"
          alt="AI Logo"
          width={32}
          height={32}
          className="w-8 h-8 mr-2 rounded-full"
        />
      )}
      <div
        className={`relative w-[75%] break-words rounded-2xl px-6 pt-4 pb-6 text-sm ${
          isUser
            ? "bg-black border border-[#426BFF] border-[2px] text-white rounded-br-none"
            : "bg-black border border-[#353535] border-[2px] text-white rounded-tl-none"
        }`}
      >
        <div>{text}</div>
        {timestamp && (
          <div
            className={`absolute text-[10px] text-gray-400 bottom-1 right-2 `}
          >
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBubble
