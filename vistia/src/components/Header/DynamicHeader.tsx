'use client';
import { usePathname } from "next/navigation";
import HomeHeader from "./HomeHeader";

const DynamicHeader = () => {
    const pathname = usePathname();
    let HeaderComponent = null;
    // tạo function render header tương ứng với pathname
    switch (pathname) {
        case '/':
            HeaderComponent = HomeHeader;
            break;
    }
    return (
        <>
            
            {HeaderComponent && <HeaderComponent />}
        </>
    )
}

export default DynamicHeader;