import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";

type PredictItemProps = {
    thumbnail: string;
    change: number;
    predicted: number;
    name: string;
    currentPrice: number;
};

const Coin = ({ thumbnail, change, predicted, name, currentPrice }: PredictItemProps) => {

    return (
        <>

            <div className="item grid grid-cols-7 mt-4 pb-4 text-[11px]">
                <div className="col-span-3 flex items-center gap-3 ">
                    <div className="item__image ">
                        <Image
                            src={thumbnail}
                            alt="logo"
                            width={40}
                            height={40}
                            className="bg-white rounded-full" />
                    </div>
                    <div>
                        <p className="text-white text-[16px] font-bold">{name}</p>
                        <p className=" text-white font-bold text-[13px]">${currentPrice.toLocaleString('vi-VN')}</p>
                    </div>
                </div>
                <div className="col-span-2 text-center">
                    
                </div>
                <div className="col-span-2 text-end">
                    <div className="  flex items-center justify-center gap-1 mb-2">
                        {change > 0 ? (
                            <IoMdArrowDropup className="text-[#00FFAE]" />
                        ) : (
                            <IoMdArrowDropdown className="text-[#FF454B]" />
                        )}
                        <p
                            className={`text-[10px] font-bold ${change >= 0 ? "text-[#00FFAE]" : "text-[#FF454B]"
                                }`}
                        >
                            {change}
                        </p>
                    </div>
                    <p className={` text-[13px] text-center font-medium ${change >= 0 ? "text-[#00FFAE]" : "text-[#FF454B]"}`}>${predicted.toLocaleString('vi-VN')}</p>
                </div>
            </div>
            <div
                className="rounded-lg p-px 
             bg-linear-to-r from-[#303030] to-[#000000]"
            ></div>
        </>

    )
}

export default Coin;