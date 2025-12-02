// Định nghĩa kiểu dữ liệu cho một điểm trên biểu đồ
export interface PSARPoint {
  label: string;
  lineValue: number;
  pointValue: number | null; // null để tạo hiệu ứng đứt đoạn cho scatter plot
}

// Định nghĩa cấu trúc dữ liệu tổng
export interface PSARDataMap {
  day: PSARPoint[];
  week: PSARPoint[];
  month: PSARPoint[];
}

export const PSAR_DATA: PSARDataMap = {
  // ----------------------------------------------------
  // 1 DAY: 24 điểm (Mỗi giờ 1 điểm)
  // ----------------------------------------------------
  day: [
    { label: "00:00", lineValue: 101.900, pointValue: null },
    { label: "01:00", lineValue: 101.820, pointValue: 101.850 },
    { label: "02:00", lineValue: 101.650, pointValue: 101.620 },
    { label: "03:00", lineValue: 101.550, pointValue: null },
    { label: "04:00", lineValue: 101.500, pointValue: 101.480 },
    { label: "05:00", lineValue: 101.600, pointValue: null },
    { label: "06:00", lineValue: 101.750, pointValue: 101.780 },
    { label: "07:00", lineValue: 101.800, pointValue: 101.820 },
    { label: "08:00", lineValue: 101.720, pointValue: null },
    { label: "09:00", lineValue: 101.650, pointValue: 101.630 },
    { label: "10:00", lineValue: 101.580, pointValue: null },
    { label: "11:00", lineValue: 101.520, pointValue: 101.500 },
    { label: "12:00", lineValue: 101.600, pointValue: 101.620 },
    { label: "13:00", lineValue: 101.700, pointValue: 101.730 },
    { label: "14:00", lineValue: 101.750, pointValue: null },
    { label: "15:00", lineValue: 101.680, pointValue: 101.660 },
    { label: "16:00", lineValue: 101.620, pointValue: 101.600 },
    { label: "17:00", lineValue: 101.700, pointValue: 101.720 },
    { label: "18:00", lineValue: 101.850, pointValue: 101.830 },
    { label: "19:00", lineValue: 101.950, pointValue: null },
    { label: "20:00", lineValue: 102.000, pointValue: 102.020 },
    { label: "21:00", lineValue: 101.900, pointValue: 101.880 },
    { label: "22:00", lineValue: 101.800, pointValue: null },
    { label: "23:00", lineValue: 101.750, pointValue: 101.720 }
  ],

  // ----------------------------------------------------
  // 1 WEEK: 7 điểm (Mỗi ngày 1 điểm)
  // ----------------------------------------------------
  week: [
    { label: "Mon", lineValue: 101.650, pointValue: 101.620 },
    { label: "Tue", lineValue: 101.750, pointValue: null },
    { label: "Wed", lineValue: 101.600, pointValue: 101.580 },
    { label: "Thu", lineValue: 101.520, pointValue: 101.500 },
    { label: "Fri", lineValue: 101.680, pointValue: null },
    { label: "Sat", lineValue: 101.850, pointValue: 101.880 },
    { label: "Sun", lineValue: 101.920, pointValue: 101.950 }
  ],

  // ----------------------------------------------------
  // 1 MONTH: 30 điểm (Mỗi ngày 1 điểm)
  // ----------------------------------------------------
  month: [
    { label: "01", lineValue: 101.550, pointValue: 101.520 },
    { label: "02", lineValue: 101.600, pointValue: null },
    { label: "03", lineValue: 101.680, pointValue: 101.700 },
    { label: "04", lineValue: 101.750, pointValue: 101.730 },
    { label: "05", lineValue: 101.820, pointValue: null },
    { label: "06", lineValue: 101.780, pointValue: 101.800 },
    { label: "07", lineValue: 101.700, pointValue: 101.680 },
    { label: "08", lineValue: 101.650, pointValue: null },
    { label: "09", lineValue: 101.600, pointValue: 101.580 },
    { label: "10", lineValue: 101.520, pointValue: 101.500 },
    { label: "11", lineValue: 101.480, pointValue: null },
    { label: "12", lineValue: 101.550, pointValue: 101.570 },
    { label: "13", lineValue: 101.620, pointValue: 101.600 },
    { label: "14", lineValue: 101.700, pointValue: null },
    { label: "15", lineValue: 101.780, pointValue: 101.800 },
    { label: "16", lineValue: 101.850, pointValue: 101.830 },
    { label: "17", lineValue: 101.920, pointValue: null },
    { label: "18", lineValue: 101.980, pointValue: 102.000 },
    { label: "19", lineValue: 101.900, pointValue: 101.880 },
    { label: "20", lineValue: 101.820, pointValue: null },
    { label: "21", lineValue: 101.750, pointValue: 101.730 },
    { label: "22", lineValue: 101.680, pointValue: 101.650 },
    { label: "23", lineValue: 101.600, pointValue: null },
    { label: "24", lineValue: 101.550, pointValue: 101.520 },
    { label: "25", lineValue: 101.650, pointValue: 101.620 },
    { label: "26", lineValue: 101.750, pointValue: null },
    { label: "27", lineValue: 101.820, pointValue: 101.850 },
    { label: "28", lineValue: 101.780, pointValue: 101.750 },
    { label: "29", lineValue: 101.650, pointValue: null },
    { label: "30", lineValue: 101.600, pointValue: 101.580 }
  ]
};

// Helper function
export type TimeFrame = '1 Day' | '1 Week' | '1 Month';

export const getPSARData = (timeFrame: TimeFrame): PSARPoint[] => {
  switch (timeFrame) {
    case '1 Week':
      return PSAR_DATA.week;
    case '1 Month':
      return PSAR_DATA.month;
    case '1 Day':
    default:
      return PSAR_DATA.day;
  }
};