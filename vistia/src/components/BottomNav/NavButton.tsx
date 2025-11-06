"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface NavButtonProps {
  item: {
    label: string
    iconWhite: string
    iconBlue: string
    path: string
  }
  pathname: string
}

export const NavButton = ({ item, pathname }: NavButtonProps) => {
  const router = useRouter()
  const isActive =
    item.path === "/"
      ? pathname === item.path
      : pathname.startsWith(item.path)

  return (
    <button
      onClick={() => router.push(item.path)}
      className="flex flex-col h-9 w-12 items-center transition-all"
    >
      <div
        className={`flex h-[22px] w-[22px] items-center justify-center rounded-full transition-all duration-300  ${isActive ? "-translate-y-[12px]" : "translate-y-0"
          }`}
      >
        <Image
          src={isActive? item.iconBlue : item.iconWhite}
          alt={item.label}
          width={32}
          height={32}
          className={`transition-all duration-300 mt-4 ${isActive
              ? "drop-shadow-[0_0_6px_#426BFF]"
              : ""
            }`}
        />
      </div>

      {isActive && (
        <span className="text-xs font-space-mono text-[#426BFF] transition-all">
          {item.label}
        </span>
      )}
    </button>
  )
}
