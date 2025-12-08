export type TimeFrame = '1 Day' | '1 Week' | '1 Month';

export interface AdxDataEntry {
    label: string;
    adxValue: number;
}

const generateMockData = (count: number): AdxDataEntry[] => {
    const data: AdxDataEntry[] = [];
    const now = new Date(); 
    let adx = 2.5;

    for (let i = 0; i < count; i++) {
        const date = new Date(now); 
        
        date.setHours(now.getHours() - i); 
        
        const label = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        
        adx = Math.max(0, Math.min(100, adx + (Math.random() - 0.5) * 100));

        data.unshift({ 
            label,
            adxValue: parseFloat(adx.toFixed(2)),
        });
    }
    
    return data;
};

const adxData1Day: AdxDataEntry[] = generateMockData(30);
const adxData1Week: AdxDataEntry[] = generateMockData(7);
const adxData1Month: AdxDataEntry[] = generateMockData(30);

export const getADXData = (timeFrame: TimeFrame): AdxDataEntry[] => {
    switch (timeFrame) {
        case '1 Day':
            return adxData1Day;
        case '1 Week':
            return adxData1Week;
        case '1 Month':
            return adxData1Month;
        default:
            return adxData1Day;
    }
};