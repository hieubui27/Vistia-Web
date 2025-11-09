// Dữ liệu RSI: dao động trong khoảng 0–100
export const rsiData = Array.from({ length: 30 }, (_, i) => ({
    time: `00:${(i * 5).toString().padStart(2, "0")}`,
    value: Math.floor(30 + Math.random() * 40), // dao động quanh vùng 30–70
  }));
  
  // Dữ liệu PSAR: giá mô phỏng dao động, có "reversal points"
  export const psarData = Array.from({ length: 30 }, (_, i) => {
    const base = 100 + Math.sin(i / 3) * 10 + (Math.random() - 0.5) * 4;
    const psar = base + (Math.random() - 0.5) * 2;
    return {
      time: `00:${(i * 5).toString().padStart(2, "0")}`,
      value: parseFloat(psar.toFixed(2)),
    };
  });
  
  // Dữ liệu ADX: giá trị từ 0–100 thể hiện sức mạnh xu hướng
  export const adxData = Array.from({ length: 30 }, (_, i) => ({
    time: `00:${(i * 5).toString().padStart(2, "0")}`,
    value: Math.floor(15 + Math.random() * 60), // vùng mạnh 25–50
  }));
  