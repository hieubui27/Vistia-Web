// components/Swap/SwapInputBox.tsx
'use client';

import React from 'react';

// Import các thư viện cần thiết
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// 1. Định nghĩa Interface (Hợp đồng)
export interface Coin {
  key: string;
  name: string;
  iconUrl: string;
}

export interface SwapInputBoxProps {
  title: string;
  availableBalance: number; // Số dư để tính Max/Half
  amount: string;           // Giá trị trong ô input
  value: string;            // Giá trị USD $
  selectedToken: Coin;
  coinList: Coin[];
  onAmountChange: (amount: string) => void; // Hàm để thay đổi số lượng
  onTokenChange: (token: Coin) => void;
}

// 2. Component Con sử dụng Interface
const SwapInputBox= ({
  title,
  availableBalance,
  amount,
  value,
  selectedToken,
  coinList,
  onAmountChange,
  onTokenChange,
}:SwapInputBoxProps) => {
  
  // Logic của Antd Dropdown (như cũ)
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const selected = coinList.find((c) => c.key === e.key);
    if (selected) onTokenChange(selected);
  };
  
  const menuItems: MenuProps['items'] = coinList.map((coin) => ({
    key: coin.key,
    label: coin.name,
    icon: (
      <img
        src={coin.iconUrl}
        alt={coin.name}
        className="w-5 h-5 rounded-full"
      />
    ),
  }));

  // 3. Xử lý logic cho Max/Half
  const handleMaxClick = () => {
    // Gọi hàm của cha với TOÀN BỘ số dư
    onAmountChange(availableBalance.toString());
  };

  const handleHalfClick = () => {
    // Gọi hàm của cha với MỘT NỬA số dư
    onAmountChange((availableBalance / 2).toString());
  };

  return (
    <div className="bg-[#1C1C3A] p-4 rounded-lg w-full text-white">
      
      {/* HÀNG TRÊN: Title, Available, Max, Half (Theo ảnh mới) */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm">{title}</span>
        <div className="flex items-center space-x-3 text-sm">
          <span className="text-gray-400">
            {/* Dùng toLocaleString để format số, ví dụ: 140.214,85 */}
            Available: {availableBalance.toLocaleString('vi-VN')}
          </span>
          <button 
            className="text-gray-300 hover:text-white"
            onClick={handleMaxClick} // <-- SỬ DỤNG Ở ĐÂY
          >
            Max
          </button>
          <button 
            className="text-gray-300 hover:text-white"
            onClick={handleHalfClick} // <-- SỬ DỤNG Ở ĐÂY
          >
            Half
          </button>
        </div>
      </div>

      {/* HÀNG DƯỚI: Dropdown và Input */}
      <div className="flex justify-between items-end">
        {/* Antd Dropdown */}
        <Dropdown menu={{ items: menuItems, onClick: handleMenuClick }} trigger={['click']}>
          <Button className="flex items-center bg-gray-700 hover:bg-gray-600 p-2 rounded-lg text-white border-none h-auto">
            <img src={selectedToken.iconUrl} alt={selectedToken.name} className="w-5 h-5 rounded-full" />
            <span className="mx-2 font-bold text-base">{selectedToken.name}</span>
            <DownOutlined size={16} />
          </Button>
        </Dropdown>

        {/* Input và Giá trị $ */}
        <div className="text-right">
          <input
            type="text"
            className="bg-transparent text-white text-2xl font-bold w-full text-right outline-none"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)} // <-- Ô input cũng gọi hàm này
            placeholder="0.0"
          />
          <span className="text-gray-400 text-sm">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default SwapInputBox;