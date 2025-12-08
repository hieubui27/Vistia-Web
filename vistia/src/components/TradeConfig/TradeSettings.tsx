"use client";
import { useState } from "react";

const TradeSettings = () => {
  const [values, setValues] = useState({
    entryPoint: "84.123.124",
    dca1: "84.123.124",
    dca2: "84.123.124",
    targetPoint: "84.123.124",
    stoploss: "84.123.124",
  });

  const handleChange = (key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  const fields = [
    { key: "entryPoint", label: "Entry Point:" },
    { key: "dca1", label: "DCA1:" },
    { key: "dca2", label: "DCA2:" },
    { key: "targetPoint", label: "Target Point:" },
    { key: "stoploss", label: "Stoploss:" },
  ];

  return (
    <div className="w-full">
      <div className="bg-black border border-[#2B2B2B] rounded-[30px] p-6 shadow-2xl">

        <div className="flex flex-col gap-5 mt-2">
          {fields.map((field) => (
            <div
              key={field.key}
              className="group flex justify-between items-center px-5 py-4 rounded-xl border border-[#0090FF] bg-black transition-all duration-300 focus-within:shadow-[0_0_10px_rgba(0,144,255,0.7)]"
            >
              <label className="text-white font-space-mono text-[8px] font-bold tracking-wide">
                {field.label}
              </label>
              <input
                type="text"
                value={values[field.key as keyof typeof values]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="bg-transparent text-right text-white font-space-mono text-[8px] font-bold outline-none focus:outline-none w-[120px] placeholder-gray-600"
              />
            </div>
          ))}
        </div>

        <button className="w-full mt-10 py-3 rounded-xl bg-[#426BFF] text-black font-space-mono font-bold text-[20px] shadow-[0_0_20px_rgba(66,107,255,0.6)] hover:shadow-[0_0_30px_rgba(66,107,255,0.9)] hover:scale-[1.02] transition-all duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default TradeSettings;