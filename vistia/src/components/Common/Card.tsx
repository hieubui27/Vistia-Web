import { ReactNode } from "react"

interface CardProps {
  title?: string
  children?: ReactNode
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

const Card = ({ title, children, onClick, className, style }: CardProps) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={`bg-black border border-[#3C3A3A] rounded-[10px] py-1 px-2 mb-4 transition-all duration-300 text-[#999999] ${className}`}
    >
      {title && <h3 className="text-[10px] mb-2 text-center ">{title}</h3>}
      {children}
    </div>
  )
}

export default Card
