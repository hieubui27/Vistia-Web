'use client';
import { usePathname } from "next/navigation";
import HomeHeader from "./HomeHeader";
import AIPredictHeader from "./AIPredictHeader";

const DynamicHeader = () => {
    const pathname = usePathname();
    let HeaderComponent = null;
    // tạo function render header tương ứng với pathname
    switch (pathname) {
        case '/':
            HeaderComponent = HomeHeader;
            break;
        case '/ai':
            HeaderComponent = AIPredictHeader;
    }
    return (
        <>
            <div className="sticky top-0 z-10 h-[22vh] w-full bg-black rounded-b-3xl mb-[1.5vh] shadow-[0_30px_40px_#0077FF40] p-[2vw] flex flex-col">
            {HeaderComponent && <HeaderComponent />}
            </div>
            
        </>
    )
}

export default DynamicHeader;