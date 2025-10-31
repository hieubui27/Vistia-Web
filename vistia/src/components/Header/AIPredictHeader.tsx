import CountUp from "react-countup";

const AIPredictHeader = () => {
    return (
        <>
            <div className="container relative w-full h-full bg-[url(/images/backgroundAI.png)] bg-no-repeat bg-cover bg-center pt-4">
                
                <div className="content relative ml-auto mr-auto w-11/12 h-11/12 bg-[#000000]/30">
                    <div className="total absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center items-center w-28 h-28 rounded-full border-[#BFBFBF] border z-20">
                        <h2 className="text-[11px] font-bold mb-2">Total Trades</h2>
                       
                        <p className="text-[18px] font-bold">
                        <CountUp
                            end={19345}
                            start={0}
                            duration={2.5}
                            separator=",">

                        </CountUp>
                        </p>
                    </div>
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
                    <div className="detail absolute top-0 left-0 w-full h-full  grid grid-cols-2 grid-rows-2 gap-x-50 gap-y-10 p-4 z-30">

                        <div className="detail__lost flex flex-col items-center justify-center">
                            <h3 className="text-[8px] text-white font-light">Loss Rate</h3>
                            <p className="font-medium text-[#FC454A]">
                            <CountUp
                            end={40}
                            start={0}
                            duration={2.5}
                            decimals="2"
                            suffix="%"
                            >

                        </CountUp>
                            </p>
                        </div>
                        <div className="detail__lost flex flex-col items-center justify-center">
                            <h3 className="text-[8px] text-white font-light">Win Rate</h3>
                            <p className="font-bold text-[#01B792]">
                            <CountUp
                            end={60}
                            start={0}
                            duration={2.5}
                            decimals="2"
                            suffix="%"
                            >

                        </CountUp>
                            </p>
                        </div>
                        <div className="detail__lost flex flex-col items-center justify-center">
                            <h3 className="text-[8px] text-white font-light">Highest Loss</h3>
                            <p className="font-bold text-[#22C0FF]">
                            <CountUp
                            end={6.02}
                            start={0}
                            duration={2.5}
                            decimals="2"
                            suffix="%"
                            >

                        </CountUp>
                            </p>
                        </div>
                        <div className="detail__lost flex flex-col items-center justify-center">
                            <h3 className="text-[8px] text-white font-light">Lowest Win</h3>
                            <p className="font-bold text-[#22C0FF]">
                            <CountUp
                            end={7.07}
                            start={0}
                            duration={2.5}
                            decimals="2"
                            suffix="%"
                            >

                        </CountUp>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AIPredictHeader;