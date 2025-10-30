import { FaSearchDollar } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import Image from "next/image";
import ava from "../../../public/images/147142.png";


const HomeHeader = () => {
    return (
        <div className="sticky top-0 h-[150px] bg-black rounded-b-3xl mb-6 shadow-[0_30px_40px_#0077FF40]">
            {/* background gradient */}
            <div className="absolute inset-0 size-full rounded-b-3xl bg-[radial-gradient(ellipse_70%_70%_at_top_center,#3D002F,rgba(255,255,255,0)),radial-gradient(ellipse_50%_100%_at_bottom_right,#39007A,rgba(255,255,255,0)),radial-gradient(ellipse_55%_55%_at_bottom_left,#00317A,rgba(255,255,255,0))]"></div>

            {/* Content */}
            <div className="content relative z-10 bg-[#fafafa15] p-3 m-3 mt-6 rounded-3xl">
                <div className="content__account flex gap-4 mb-3">
                    <div className="content__account__avatar text-[36px]">
                        <Image src={ava} alt="ava" className="h-9 w-9 rounded-full object-cover" />
                    </div>
                    <div className="content__account__greeting ">
                        <h2 className="font-bold text-[14px]">Hi, BaroV</h2>
                        <p className="font-thin text-[12px]">Have a good day!</p>
                    </div>
                </div>
                <div className="content__search flex bg-[#151515] relative rounded-3xl overflow-hidden" >
                    <div className="icon absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaSearchDollar/>
                    </div>
                    
                    <input className="bg-[#151515] w-full h-8.5  border-none outline-none pl-10 placeholder-gray-400 text-[12px]" placeholder="Search your cryptocurrencies"/>
                </div>
                <div className="content__noti absolute top-5 right-5 bg-black p-2 rounded-full">
                    <FaRegBell />
                </div>
            </div>
        </div>
    )
}
export default HomeHeader;