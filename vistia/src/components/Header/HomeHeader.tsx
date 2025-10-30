import { FaSearchDollar } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import ava from "../../../public/images/147142.png";


const HomeHeader = () => {
    return (
        <div className="relative h-[90px] bg-black rounded-b-3xl mb-4 shadow-[0_15px_20px_#0077FF40]">
            {/* background gradient */}
            <div className="absolute inset-0 size-full rounded-b-3xl bg-[radial-gradient(ellipse_70%_70%_at_top_center,#3D002F,rgba(255,255,255,0)),radial-gradient(ellipse_50%_100%_at_bottom_right,#39007A,rgba(255,255,255,0)),radial-gradient(ellipse_55%_55%_at_bottom_left,#00317A,rgba(255,255,255,0))]"></div>

            {/* Content */}
            <div className="content relative z-10 bg-[#fafafa15] p-2 m-2 mt-2 rounded-2xl">
                <div className="content__account flex gap-2 mb-1">
                    <div className="content__account__avatar text-[22px]">
                        <Image src={ava} alt="ava" className="h-6 w-6 rounded-full object-cover" />
                    </div>
                    <div className="content__account__greeting ">
                        <h2 className="font-bold text-[11px]">Hi, BaroV</h2>
                        <p className="font-thin text-[10px]">Have a good day!</p>
                    </div>
                </div>
                <div className="content__search flex bg-[#151515] relative rounded-xl overflow-hidden" >
                    <div className="icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaSearchDollar/>
                    </div>
                    
                    <input className="bg-[#151515] w-full h-7 border-none outline-none pl-8 placeholder-gray-400 text-[11px]" placeholder="Search your cryptocurrencies"/>
                </div>
                <div className="content__noti absolute top-2 right-2 bg-black p-1 rounded-full">
                    <FaRegBell />
                </div>
            </div>
        </div>
    )
}
export default HomeHeader;