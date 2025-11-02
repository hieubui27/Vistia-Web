import Coin from "./Coin";
import ai_data from "../../../public/mock/ai_data.json"
const mockdata = ai_data;
  

const PredictList = () => {
    return (
        
    <>
        <div className="relative mt-6 ml-auto mr-auto z-10 w-10/12 h-fit p-4 border border-[#3C3A3A] bg-black rounded-2xl">
            <div className="header grid grid-cols-7 pb-2 border-b border-[#707070] text-[11px]">
                <div className="col-span-3">Cryptocurrency</div>
                <div className="col-span-2 text-center">Time</div>
                <div className="col-span-2 text-end">Next Change</div>
            </div>  
            <div className="mt-4">
            {mockdata && mockdata.map((item)=>(
                <Coin 
                key={item.id}
                id={item.id}
                thumbnail = {item.iconUrl}
                change = {item.changePercentage}
                predicted= {item.predictedPrice}
                name={item.name}
                currentPrice={item.currentPrice}
                />
            ))}
            </div>
        </div>
    </>
    )
}

export default PredictList;