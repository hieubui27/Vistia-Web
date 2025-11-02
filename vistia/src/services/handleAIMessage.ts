import { Dispatch, SetStateAction } from "react"

interface Message {
  text: string
  sender: "user" | "ai"
  timestamp: string
  date: string
  loading?: boolean
}

export const handleAIMessage = async (
  setMessages: Dispatch<SetStateAction<Message[]>>,
  formatTime: () => string
) => {
  let dotCount = 1
  let rounds = 0
  let apiDone = false
  let apiResult: string | null = null

  setMessages(prev => [
    ...prev,
    {
      text: "Generating.",
      sender: "ai",
      timestamp: formatTime(),
      date: new Date().toISOString().split("T")[0],
      loading: true,
    },
  ])

  import("./fetchData").then(({ fetchData }) =>
    fetchData().then(res => {
      apiResult = res
      apiDone = true
    })
  )

  const generatingInterval = setInterval(() => {
    setMessages(prev =>
      prev.map(m =>
        m.loading ? { ...m, text: `Generating${'.'.repeat(dotCount)}` } : m
      )
    )

    dotCount = dotCount >= 3 ? 1 : dotCount + 1
    if (dotCount === 1) rounds++

    if (apiDone && rounds >= 3) {
      clearInterval(generatingInterval)
      const text = apiResult!
      let charIndex = 0
      const typeInterval = setInterval(() => {
        setMessages(prev =>
          prev.map(m =>
            m.loading ? { ...m, text: text.slice(0, charIndex + 1) } : m
          )
        )
        charIndex++
        if (charIndex >= text.length) {
          clearInterval(typeInterval)
          setMessages(prev =>
            prev.map(m => (m.loading ? { ...m, loading: false } : m))
          )
        }
      }, 20)
    }
  }, 100)
}
