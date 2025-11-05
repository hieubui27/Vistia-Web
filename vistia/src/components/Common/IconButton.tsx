'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

interface IconButtonProps {
  label: string
  iconSrc: string
  path: string
}

const IconButton = ({ label, iconSrc, path }: IconButtonProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => router.push(path)}>
      <Image
        src={iconSrc}
        alt={label}
        width={40}
        height={40}
        className="object-contain mb-2"
      />
      <p className="text-[9px] font-bold text-center text-white">{label}</p>
    </div>
  )
}

export default IconButton
