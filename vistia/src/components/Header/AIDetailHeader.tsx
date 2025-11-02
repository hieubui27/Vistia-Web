'use client'
import { useParams } from "next/navigation";
import ai_data from "../../../public/mock/ai_data.json";
import Image from "next/image";
import CometIcon from "../PredictList/cometIcon";
const data = ai_data;

const AIDetailHeader = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const itemData = data.find(item => item.id === id);
    return (
        <>
            <div className="container relative w-full h-full bg-[url(/images/backgroundAI.png)] bg-no-repeat bg-cover bg-center pt-4">
                <div className="content relative ml-auto mr-auto w-11/12 h-11/12 bg-[#000000]/30">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 left-0 w-full h-full z-10"
                    >
                        <path
                            d="M 15 0 L 5 0 L 0 15 L 0 30
                               M 85 0 L 95 0 L 100 15 L 100 30
                               M 0 70 L 0 85 L 5 100 L 15 100
                               M 85 100 L 95 100 L 100 85 L 100 70"
                            stroke="#BFBFBF"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    <div className="Primary pt-4 mb-2 flex justify-center items-center gap-2">
                        <div className="image">
                            {itemData?.iconUrl && (
                                <Image
                                    src={itemData.iconUrl}
                                    alt={itemData?.name ?? "Unknown coin"}
                                    width={50}
                                    height={50}
                                />
                            )}
                        </div>
                        <div className="pair">
                            <h2>{itemData?.name}/USDT</h2>
                            <p className="text-[11px] font-thin">{itemData?.name}</p>
                        </div>
                    </div>
                    <div className="Secondary grid grid-cols-5">
                        <div className="col-span-2 text-center">
                            <p className="text-[8px] mb-2">Current Price</p>
                            <p>{itemData?.currentPrice}</p>
                        </div>
                        <div className="col-span-1">
                            {(itemData?.changePercentage ?? 0) > 0 ? (
                                <CometIcon color="#00FFAE" />
                            ) : (
                                <CometIcon color="#FF454B" />
                            )}

                        </div>
                        <div className="col-span-2 text-center">
                            <p className="text-[8px] mb-2">Predicted Price</p>
                            <p className={`${(itemData?.changePercentage ?? 0) >= 0 ? "text-[#00FFAE]" : "text-[#FF454B]"}`}>{itemData?.predictedPrice}</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AIDetailHeader;