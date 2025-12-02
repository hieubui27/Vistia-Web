"use client";
import PsarChart from "@/src/components/Charts/PSAR/PsarChart";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function PSARPage() {
  const router = useRouter();
  const onConfirm = () => {
    router.push('/swap');
  }
  return (
    <div className="p-6 bg-black min-h-screen">
      <PsarChart />
      <button
        onClick={onConfirm}
        className="w-full py-3.5 mt-8 bg-[#000000] text-[#9EB3FF] overflow-hidden font-bold rounded-xl text-[20px] flex items-center justify-center border border-[#353535]">
        <span className="mr-4">Swap Now</span>
        <Image
          src="/button/reload_icon.svg"
          alt="reload icon"
          width={30}
          height={30}
        />
      </button>
    </div>
  )
}

