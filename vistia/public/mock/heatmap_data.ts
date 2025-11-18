// 1. Dữ liệu gốc bạn cung cấp
const COIN_LIST = [
    { id: "bitcoin", name: "BTC", image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", rsi_prev: 45, rsi_now: 55 },
    { id: "ethereum", name: "ETH", image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", rsi_prev: 60, rsi_now: 52 },
    { id: "binancecoin", name: "BNB", image: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png", rsi_prev: 50, rsi_now: 65 },
    { id: "ripple", name: "XRP", image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", rsi_prev: 30, rsi_now: 28 },
    { id: "cardano", name: "ADA", image: "https://assets.coingecko.com/coins/images/975/large/cardano.png", rsi_prev: 55, rsi_now: 58 },
    { id: "dogecoin", name: "DOGE", image: "https://assets.coingecko.com/coins/images/5/large/dogecoin.png", rsi_prev: 40, rsi_now: 35 },
    { id: "polkadot", name: "DOT", image: "https://assets.coingecko.com/coins/images/12171/large/polkadot.png", rsi_prev: 65, rsi_now: 70 },
    { id: "solana", name: "SOL", image: "https://assets.coingecko.com/coins/images/4128/large/solana.png", rsi_prev: 48, rsi_now: 50 },
    { id: "litecoin", name: "LTC", image: "https://assets.coingecko.com/coins/images/2/large/litecoin.png", rsi_prev: 38, rsi_now: 42 },
    { id: "chainlink", name: "LINK", image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png", rsi_prev: 52, rsi_now: 49 }
  ];
  

  const getRandomTime = (minusMinutes = 0) => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - minusMinutes);
      const timeStr = date.toTimeString().split(' ')[0];
      const dateStr = date.toLocaleDateString('vi-VN'); 
      return { timeStr, dateStr };
  };
  

  const MOCK_DATA = COIN_LIST.flatMap((coin) => {

      return [
          {
              ...coin,
              uniqueId: `${coin.id}-1`,
              rsi: coin.rsi_now,
              ...getRandomTime(0)
          },
          {
              ...coin,
              uniqueId: `${coin.id}-2`,
              rsi: coin.rsi_now - Math.floor(Math.random() * 3),
              ...getRandomTime(5)
          },
          {
              ...coin,
              uniqueId: `${coin.id}-3`,
              rsi: coin.rsi_now + Math.floor(Math.random() * 2), 
              ...getRandomTime(15)
          }
      ];
  });
  

  export default MOCK_DATA;