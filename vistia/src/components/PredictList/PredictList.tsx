import Coin from "./Coin";

const mockdata = [
    {
      "id": "wbtc",
      "name": "WBTC",
      "iconUrl": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
      "currentPrice": 98295.99,
      "predictedPrice": 98296.13,
      "changePercentage": 0.00051
    },
    {
      "id": "weth",
      "name": "WETH",
      "iconUrl": "https://assets.coingecko.com/coins/images/2518/large/weth.png",
      "currentPrice": 3884.48,
      "predictedPrice": 3782.21,
      "changePercentage": -0.00092
    },
    {
      "id": "xcdot",
      "name": "xcDOT",
      "iconUrl": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png",
      "currentPrice": 7.4295,
      "predictedPrice": 7.4317,
      "changePercentage": 0.01142
    },
    {
      "id": "frax",
      "name": "FRAX",
      "iconUrl": "https://assets.coingecko.com/coins/images/13422/large/frax_logo.png",
      "currentPrice": 236.06,
      "predictedPrice": 237.19,
      "changePercentage": 0.00318
    },
    {
      "id": "wglmr",
      "name": "WGLMR",
      "iconUrl": "https://assets.coingecko.com/coins/images/22459/large/glmr.png",
      "currentPrice": 0.2658,
      "predictedPrice": 0.41275,
      "changePercentage": -0.01235
    },
    {
      "id": "stella",
      "name": "STELLA",
      "iconUrl": "https://assets.coingecko.com/coins/images/29563/large/stella.png",
      "currentPrice": 4.82,
      "predictedPrice": 4.94,
      "changePercentage": 0.01827
    }
  ]
  

const PredictList = () => {
    return (
        
    <>
        <div className="relative mt-6 ml-auto mr-auto z-10 w-10/12 h-full p-4 border border-[#3C3A3A] bg-black rounded-2xl">
            <div className="header grid grid-cols-7 pb-2 border-b border-[#707070] text-[11px]">
                <div className="col-span-3">Cryptocurrency</div>
                <div className="col-span-2 text-center">time</div>
                <div className="col-span-2 text-end">Next Change</div>
            </div>  
            <div className="mt-4">
            {mockdata && mockdata.map((item)=>(
                <Coin 
                key={item.id}
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