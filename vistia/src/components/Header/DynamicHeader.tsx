'use client';
import { usePathname } from "next/navigation";
import HomeHeader from "./HomeHeader";

import AIHomeHeader from "./AIHomeHeader";
import AIDetailHeader from "./AIDetailHeader";
import ChatbotHeader from "./ChatbotHeader";


const DynamicHeader = () => {
    const pathname = usePathname();
    let HeaderComponent = null;
    // tạo function render header tương ứng với pathname
    if (pathname === '/ai') {
        // Bất kỳ URL nào bắt đầu bằng /ai (bao gồm /ai và /ai/detail/123)
        // đều sẽ do AIHomeHeader xử lý
        HeaderComponent = AIHomeHeader;

    } else if(pathname.startsWith('/ai/detail')){
        HeaderComponent = AIDetailHeader;
    }
    else if(pathname === '/chatbot'){
        HeaderComponent = ChatbotHeader;
    }
    else if (pathname === '/') {
        HeaderComponent = HomeHeader;

    }
    return (
        <>
            <div className="sticky top-0 z-20 h-[22vh] w-full bg-black rounded-b-3xl overflow-hidden shadow-[0_30px_40px_#0077FF40]  flex flex-col">
            {HeaderComponent && <HeaderComponent />}
            </div>
            
        </>
    )
}

export default DynamicHeader;