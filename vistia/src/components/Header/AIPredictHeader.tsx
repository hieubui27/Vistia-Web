import CountUp from "react-countup";

const AIPredictHeader = () => {
    return (
        <>
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
        </>
    )
}

export default AIPredictHeader;