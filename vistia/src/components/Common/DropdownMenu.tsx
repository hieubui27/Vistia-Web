"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

type DropdownMenuProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  className?: string
}

const DropdownMenu = ({ label, options, value, onChange, className }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <div ref={ref} className={`relative w-full ${className || ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-[#0E0E0E] border border-[#353535] rounded-sm px-4 py-1 text-[12px] mb-2"
      >
        <span className="text-white truncate">{value || label}</span>
        <ChevronDown size={16} className="text-white flex-shrink-0" />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-full bg-[#1E1E3A] border border-gray-700 rounded-xl shadow-lg z-50">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt)
                setOpen(false)
              }}
              className={`px-4 py-2 text-[12px] cursor-pointer hover:bg-[#2A2A50] ${
                value === opt ? "text-[#426BFF]" : "text-gray-300"
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
