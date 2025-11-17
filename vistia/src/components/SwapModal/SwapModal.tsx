import Image from "next/image";

interface SwapModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const SwapModal = ({ isOpen, onClose, onConfirm }:SwapModalProps) => {
    if (!isOpen) return null;

    const renderRow = (label: string, value: string, color: string = "text-white") => (
        <div className="flex justify-between items-center px-4 py-5 bg-[#000000] backdrop-blur-md border border-[#353535] rounded-xl mb-4">
            <span className="text-[#426BFF] text-[12px] font-bold">{label}</span>
            <span className={`${color} text-[12px] font-bold`}>{value}</span>
        </div>
    );


    return (
        <div
            className="fixed inset-0 z-999 flex items-end justify-center bg-transparent"
            onClick={onClose}
        >
            <style>
                {`
                    @keyframes slideUp {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }
                    .animate-slide-up {
                        animation: slideUp 0.36s forwards;
                    }
                    .clip-path-custom {
                        clip-path: polygon(
                            0 45px,
                            55px 0,
                            calc(100% - 55px) 0,
                            100% 45px,
                            100% 100%,
                            0 100%
                        );
                    }
                `}
            </style>

            <div
                className="relative z-10 w-full min-w-full h-160
                    bg-[url('/Vector142.svg')] bg-contain bg-no-repeat bg-center
                    rounded-t-[28px] p-8 animate-slide-up flex flex-col mt overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/90 pointer-events-none clip-path-custom"></div>

                <div className="content relative z-10">
                    <h2 className="text-[20px] font-bold text-[#426BFF] mb-6 text-center uppercase tracking-[1.5px]">
                        Trading Strategy
                    </h2>

                    <div className="text-sm mb-6">
                        <div className="flex items-center gap-1 mb-2">
                            <span className="text-[#FFFFFF] font-bold">Signal:</span>
                            <span className="text-[#EF4147] font-medium">Over Bought</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[#FFFFFF]">Indicator:</span>
                            <span className="text-[#FFFFFF]">RSI7</span>
                        </div>
                    </div>

                    <div className="flex-1">
                        {renderRow("Entry Point", "$90.000,00")}
                        {renderRow("DCA1", "$80.000,00")}
                        {renderRow("DCA2", "$70.000,00")}
                        {renderRow("Target Point", "$200.000,00", "text-[#00FFAE]")}
                        {renderRow("Stop Loss", "$90.000,00", "text-[#FF454B]")}
                    </div>

                    <button
                        onClick={onConfirm}
                        className="w-full py-3.5 mt-4 bg-[#000000] text-[#9EB3FF] font-bold rounded-xl text-[20px] flex items-center justify-center"
                    >
                        <span className="mr-4">Swap Now</span>
                        <Image
                            src="/button/reload_icon.svg"
                            alt="reload icon"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SwapModal;

