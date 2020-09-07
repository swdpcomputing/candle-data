getBaseEndpoint = () => {
  return "https://api.binance.com/";
};

getLatestURL = () => {
  
}

getCandleDataEndPoint = (symbol, interval) => {
  return (
    this.getBaseEndpoint() +
    "api/v3/klines?symbol=" +
    symbol +
    "&interval=" +
    interval
  );
};

getCandleStickData = (coinPairSymbol) => {
  const url = this.getCandleDataEndPoint("BNBBTC", "5m");
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Success: ", data[0]);
    })
    .catch((err) => {
      // console.error("Error: ", err);
    });
};