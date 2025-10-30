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
            <div className="sticky top-0">
                {HeaderComponent && <HeaderComponent />}
            </div>
            
        </>
    )
}

export default DynamicHeader;