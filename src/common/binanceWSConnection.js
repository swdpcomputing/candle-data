import * as common from "../common/common.js";
import _ from "lodash";

// To-do - Seperate the data formatting into an interface to make this class reusable as WebSocketConnection

class BinanceWSConnection {
  constructor(url, callback) {
    this._url = url;
    this._callback = callback;
    this._refreshRate = 2000; // Fast initial rate to speed up table.
    this._rawData = {};
    this._server = {};
    this.intervalId = 0;
    this.ws = {};
    this.initialise();
  }

  setRefreshRate = (newRefreshRate) => {
    this._refreshRate = newRefreshRate;
    this.startCallLoop();
  };

  checkInitialDataIntegrity = () => {
    if (_.isEmpty(this._rawData)) {
      window.setTimeout(this.checkInitialDataIntegrity, 100);
    } else {
      this.sendData();
    }
  };

  initialise = async () => {
    try {
      this._server = await this.connect();
      this.checkInitialDataIntegrity();
      this.startCallLoop();
    } catch (err) {
      this.socketError(err);
    }
  };

  connect = () => {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this._url);

      this.ws.onopen = () => {
        console.log("Connected WebSocket");
        resolve(this.ws);
      };

      this.ws.onclose = (e) => {
        console.log("Socket is closed");
      };

      this.ws.onerror = (err) => {
        this.socketError(err);
        reject(err);
        this.ws.close();
      };

      this.ws.onmessage = (rawData) => {
        this._rawData = rawData;
      };
    });
  };

  disconnect = () => {
    this.ws.close();
  }

  socketError = (err) => {
    console.error("Socket encountered error: ", err.message, "Closing socket");
  };

  refresh = () => {
    this.sendData()
  }

  startCallLoop = () => {
    clearInterval(this.intervalId);

    if (this._refreshRate !== 0) {
      this.intervalId = setInterval(() => {
        this.sendData();
      }, this._refreshRate);
    }
  };

  sendData = () => {
    if (!_.isEmpty(this._rawData)) {
      // checks for empty data
      let data = common.convertToJSON(this._rawData); // converts raw data to JSON
      data = common.allMarketMiniTickerToSOHLC(data); // converts JSON to SOHLC format
      this._callback(data); // sends data back to parent
    }
  };
}

export { BinanceWSConnection };