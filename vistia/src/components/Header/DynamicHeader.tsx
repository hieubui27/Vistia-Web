'use client';
import { usePathname } from "next/navigation";
import HomeHeader from "./HomeHeader";
import ChatbotHeader from "./ChatbotHeader";

const DynamicHeader = () => {
    const pathname = usePathname();
    let HeaderComponent = null;
    // tạo function render header tương ứng với pathname
    switch (pathname) {
        case '/':
            HeaderComponent = HomeHeader;
            break;
        case '/chatbot':
             HeaderComponent = ChatbotHeader;
            break;
        default:
            HeaderComponent = null;
            break;
    }
    return (
        <>
            
            {HeaderComponent && <HeaderComponent />}
        </>
    )
}

export default DynamicHeader;