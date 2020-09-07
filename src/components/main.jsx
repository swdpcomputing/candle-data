import React, { Component } from "react";
import CoinPairTable from "./coinPairTable";
import Paginate from "../common/paginate";
import RadioGroup from "../common/radioGroup";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { BinanceWSConnection } from "../common/binanceWSConnection";

class Main extends Component {
  state = {
    coinPairs: {},
    currentPage: 1,
    pageSize: 10,
    sortColumn: { path: "coinPairId", order: "asc" },
    selectedRefreshRate: "2s",
    refreshRates: {
      Off: 0,
      "2s": 2000,
      "10s": 10000,
      "30s": 30000,
      "1m": 60000,
      "5m": 360000,
    },
    bwsc: {},
  };

  componentDidMount() {
    const url = "wss://stream.binance.com:9443/ws/!miniTicker@arr";
    const bwsc = new BinanceWSConnection(url, this.handleWSData);
    this.setState({ bwsc });
  }

  handleWSData = (coinPairs) => {
    this.setState({ coinPairs });
  };

  handleLike = (coinPair) => {
    const coinPairs = [...this.state.coinPairs];
    const index = coinPairs.indexOf(coinPair);
    coinPairs[index] = { ...coinPairs[index] };
    coinPairs[index].liked = !coinPairs[index].liked;
    this.setState({ coinPairs });
  };

  handleView = (coinPairToView) => {};

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleRefreshRateSelect = (refreshRate) => {
    this.setState({ selectedRefreshRate: refreshRate }); //, currentPage: 1???
    this.state.bwsc.setRefreshRate(this.state.refreshRates[refreshRate]);
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      coinPairs: allCoinPairs,
    } = this.state;

    const sorted = _.orderBy(
      allCoinPairs,
      [sortColumn.path],
      [sortColumn.order]
    );

    const coinPairs = paginate(sorted, currentPage, pageSize);
    return { totalCount: allCoinPairs.length, coinPairs };
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      refreshRates,
      selectedRefreshRate,
    } = this.state;
    const { totalCount, coinPairs } = this.getPagedData();

    return (
      <div>
        <h1 className="see-through">Candle-data</h1>

        <button
          className="btn btn-primary"
          onClick={this.state.bwsc.refresh}
          type="button"
        >
          Refresh
        </button>

        <RadioGroup
          items={refreshRates}
          selectedItem={selectedRefreshRate}
          onItemSelect={this.handleRefreshRateSelect}
        />

        <CoinPairTable
          coinPairs={coinPairs}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onView={this.handleView}
          onSort={this.handleSort}
        />

        <Paginate
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Main;
