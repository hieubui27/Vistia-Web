export const fetchData = async (): Promise<string> => {
  try {
    const res = await fetch("/api/quotes")
    const data = await res.json()
    return data[0].q
  } catch {
    return "Có lỗi khi gọi API"
  }
}
