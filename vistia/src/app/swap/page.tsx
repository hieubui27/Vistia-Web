import SwapComponent from "@/src/components/Swap/Swap";
import Image from "next/image";

const Swap = () =>{
    return (
        <div className="bg-[#06001C] w-full h-screen">
            <div className="Head flex justify-between items-center p-4">
                <div>
                    <Image
                        src="/images/Group 48095791.png"
                        alt="logo"
                        width={60}
                        height={30}
                    />
                </div>
                <div className="w-5/12 rounded-3xl bg-[#000B32] p-2 pl-4 pr-4 border border-[#426BFF]"> 
                    <p className="w-full truncate text-[11px] text-[#9EB3FF] mb-0">IShduiadhiuahdihaiusdhiahsd0-21940921849982374</p>
                </div>
            </div>
            <div className="Body">
                <SwapComponent />
            </div>
        </div>
    )
}

export default Swap;