export const formatTime = () => {
  const now = new Date()
  let hours = now.getHours()
  const minutes = now.getMinutes()
  const period = hours < 12 ? "SA" : "CH"
  hours = hours % 12
  if (hours === 0) hours = 12
  const hoursStr = hours.toString().padStart(2, "0")
  const minutesStr = minutes.toString().padStart(2, "0")
  return `${hoursStr}:${minutesStr} ${period}`
}
