
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const res = await fetch("https://zenquotes.io/api/quotes/random")
    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json([{ q: "Không lấy được quote", a: "" }])
  }
}
