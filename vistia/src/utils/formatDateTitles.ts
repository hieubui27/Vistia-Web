export const formatDateTitle = (dateStr: string) => {
  const date = new Date(dateStr)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `Thg ${month} ${day}, ${year}`
}
