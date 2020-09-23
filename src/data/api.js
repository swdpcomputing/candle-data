class BinanceAPI {
    static getBaseEndpoint = () => {
        return "https://api.binance.com/";
    }

    static getExchangeInformation = () => {
        return getBaseEndpoint + "api/v3/exchangeInfo";
    }
}

export default BinanceAPI