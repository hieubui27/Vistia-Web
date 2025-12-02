import { useCoin } from "@/src/context/HeatmapCoinContext"
import { Image } from "antd";

function PSARHeader() {
    const { selectedCoin } = useCoin();
    const coinName = selectedCoin?.name || "BTC";
    const coinImage = selectedCoin?.image || "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"; 
    
    const rsiNow = selectedCoin?.rsi_now ?? 0;
    const rsiPrev = selectedCoin?.rsi_prev ?? 0;
    const isUp = rsiNow >= rsiPrev;
    const statusColor = isUp ? "text-[#01B792]" : "text-[#FF454B]";
    const arrowIcon = isUp ? "▲" : "▼";
    const percent = Math.abs(((rsiNow - rsiPrev) / rsiPrev) * 100).toFixed(2);

    return (
        <div className="container relative w-full h-full bg-[url(/images/AIPredict/image.png)] bg-no-repeat bg-cover bg-center pt-4 pb-10">
             <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11/12 max-w-[600px] h-auto min-h-[140px] bg-[url(/heatmap/Vector118.png)] bg-no-repeat bg-contain bg-center z-20"></div>
            <div className="content flex justify-between items-center p-6 relative z-10 mt-2 mx-auto w-11/12 max-w-[600px] h-auto min-h-[140px] bg-[url(/heatmap/Vector119.png)] bg-no-repeat bg-contain bg-center">
            
                <div className="information flex flex-col justify-center gap-1">
                    <h3 className="text-white text-[16px] font-bold tracking-wider uppercase">
                        {coinName}/USDT
                    </h3>
                    {/* Giả lập giá - Thực tế bạn cần thêm field price vào JSON nếu muốn hiển thị giá thật */}
                    <p className={`${statusColor} text-[18px] font-bold transition-colors duration-300`}>
                        $98.295,99 
                    </p>
                    <div className="flex items-center gap-2">
                    <span className={`${statusColor} text-[10px]`}>{arrowIcon}</span>
                        <p className={`${statusColor} text-[10px] font-bold transition-colors duration-300`}>
                            4.34%
                        </p>
                    </div>
                </div>

                <div className="relative p-1 rounded-full mb-6">
                    <Image
                        src={coinImage}
                        alt={selectedCoin?.id || "coin"}
                        width={50}
                        height={50}
                        preview={false}
                        className="rounded-full object-cover"
                    />
                </div>
                <span className="text-white text-[11px] absolute bottom-4 right-5">
                    Trading Pair
                </span>
            </div>
        </div>
    )
}

export default PSARHeader;