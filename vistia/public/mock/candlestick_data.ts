// public/mock/candlestick_data.ts

export interface CandlestickDataEntry {
    time: string;
    open: number;
    close: number;
    low: number;
    high: number;
    volume: number;
}

const generateCandlestickData = (count: number): CandlestickDataEntry[] => {
    const data: CandlestickDataEntry[] = [];
    const basePrice = 100000;
    const baseVolume = 50000;

    for (let i = 0; i < count; i++) {
        const time = new Date(Date.now() - (count - 1 - i) * 3600000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        // Tạo biến động giá nhỏ
        const change = (Math.random() - 0.5) * 5000;
        const open = data.length > 0 ? data[data.length - 1].close : basePrice + change;
        const close = open + change;
        const high = Math.max(open, close) + Math.random() * 2000;
        const low = Math.min(open, close) - Math.random() * 2000;
        const volume = baseVolume + (Math.random() - 0.5) * 10000;

        data.push({
            time,
            open: parseFloat(open.toFixed(2)),
            close: parseFloat(close.toFixed(2)),
            low: parseFloat(low.toFixed(2)),
            high: parseFloat(high.toFixed(2)),
            volume: Math.round(volume),
        });
    }
    return data;
};

export const candlestickData: CandlestickDataEntry[] = generateCandlestickData(50);