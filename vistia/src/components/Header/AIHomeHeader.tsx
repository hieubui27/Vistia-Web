'use client'
import AIPredictHeader from "./AIPredictHeader"




const AIHomeHeader = () => {
    const AIHeader = AIPredictHeader;

    return (
        <>
        <div className="container relative w-full h-full bg-[url(/images/AIPredict/image.png)] bg-no-repeat bg-cover bg-center pt-4">
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
                    {AIHeader && <AIHeader />}
                </div>
            </div>
        </>
    )
}

export default AIHomeHeader;