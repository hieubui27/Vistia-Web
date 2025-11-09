import { Select, Image } from "antd";
import { FaArrowDown } from "react-icons/fa";
import token_list from "../../../public/mock/token_list.json";

interface Token {
  chainId: number;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  logoURI: string;
}

const data: Token[] = token_list;

const SwapBox = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <button className="text-[13px] text-[#426BFF] font-extrabold">
        Choose network
      </button>
      <div className="main p-4 border border-[#426BFF] rounded-[8px] mt-[10px] shadow-[0_0_12px_2px_rgba(66,107,255,0.6)]">
        <div className="from border border-[#2946AB] rounded-[8px] overflow-hidden" >
          <div className="top text-[#9EB3FF] flex justify-between items-center bg-[#161616] p-2">
            <h3 className="text-[12px] font-bold">From</h3>
            <p className="text-[8px]">Availabel:</p>
            <div className="flex gap-4">
              <button className="text-[8px]">Half</button>
              <button className="text-[8px]">Max</button>
            </div>
          </div>
          <div className="bottom bg-[#000000] p-2 flex justify-between items-center">
            <div className="select bg-[#161616] pt-1 pb-1 rounded-[8px]">
            <Select
                defaultValue="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                onChange={handleChange}
                variant="borderless"
                className=""
                options={data.map((token) => ({
                  value: token.address,
                  label: (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Image
                        src={token.logoURI}
                        alt={token.name}
                        width={20}
                        height={20}
                        style={{ borderRadius: "50%" }}
                        preview={false}
                      />
                      <span className="font-bold text-[12px] text-white">{token.symbol}</span>
                    </div>
                  ),
                }))}
              />
            </div>
            <div className="amount flex flex-col items-end text-[#9EB3FF]">
                <p className="text-[14px] font-bold">1.5</p>
                <p className="text-[10px] font-bold">$142.125,7</p>
            </div>
          </div>
        </div>
        <div className="arrow flex w-full justify-center items-center mt-2 mb-2">
            <div className="rounded-full bg-[#426BFF] p-1.5">
                <FaArrowDown color="#000" size={10}/>
            </div>
        </div>
        <div className="to border border-[#2946AB] rounded-[8px] overflow-hidden">
        <div className="top text-[#9EB3FF] flex justify-between items-center bg-[#161616] p-2 ">
            <h3 className="text-[12px] font-bold">To</h3>
            <p className="text-[8px]">Availabel:</p>
            <div className="flex gap-4">
              <button className="text-[8px]">Half</button>
              <button className="text-[8px]">Max</button>
            </div>
          </div>
          <div className="bottom bg-[#000000] p-2 flex justify-between items-center">
            <div className="select bg-[#161616] pt-1 pb-1 rounded-[8px]">
            <Select
                defaultValue="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                onChange={handleChange}
                variant="borderless"
                className=""
                options={data.map((token) => ({
                  value: token.address,
                  label: (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Image
                        src={token.logoURI}
                        alt={token.name}
                        width={20}
                        height={20}
                        style={{ borderRadius: "50%" }}
                        preview={false}
                      />
                      <span className="font-bold text-[12px] text-[#fff]">{token.symbol}</span>
                    </div>
                  ),
                }))}
              />
            </div>
            <div className="amount flex flex-col items-end text-[#9EB3FF]">
                <p className="text-[14px] font-bold">1.5</p>
                <p className="text-[10px] font-bold">$142.125,7</p>
            </div>
          </div>
        </div>
        <div className="swap mt-20">
            <button className="w-full bg-[#426BFF] pt-2 pb-2 rounded-[8px] text-[20px] text-[#000] font-bold">
                Swap
            </button>
        </div>
      </div>
    </>
  );
};

export default SwapBox;