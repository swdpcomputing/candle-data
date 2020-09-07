export const convertToJSON = (rawData) => {
    return JSON.parse(rawData.data);
  };
  
  export const allMarketMiniTickerToSOHLC = (data) => {
    //converts the All Market Mini Ticker data to {pairID, open, high, low, close}
    data = data.map((pair) => {
      return {
        _id: pair["s"], //new identifier: pairId
        coinPairId: pair["s"], //new identifier: pairId
        open: pair["o"].substring(0, 10), //new identifier: open
        high: pair["h"].substring(0, 10), //new identifier: high
        low: pair["l"].substring(0, 10), //new identifier: low
        close: pair["c"].substring(0, 10), //new identifier: close
      };
    });
    return data;
  };