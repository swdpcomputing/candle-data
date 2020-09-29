import React, { Component } from "react";
import "../css/main.css";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroupMUI from "../common/radioGroupMUI";
import CoinPairTable from "./coinPairTable";
import { BinanceWSConnection } from "../common/binanceWSConnection";
import { paginate } from "../utils/paginate";
import { PaginateMUI, DropdownMUI } from "../common";
import _ from "lodash";

class Main extends Component {
  state = {
    coinPairs: {},
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 50, 100],
    sortColumn: { path: "coinPairId", order: "asc" },
    refreshRate: "2s",
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
    this.setState({ bwsc: bwsc });
  }

  componentWillUnmount() {
    // Does clean up websoket, error only displays once
    this.state.bwsc.disconnect();
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

  handleRefreshRateChange = (refreshRate) => {
    this.setState({ refreshRate: refreshRate }); //, currentPage: 1???
    this.state.bwsc.setRefreshRate(this.state.refreshRates[refreshRate]);
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize: pageSize });
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
    const totalCount =
      allCoinPairs.length === undefined ? 0 : allCoinPairs.length;
    return { totalCount, coinPairs };
  };

  render() {
    const {
      pageSize,
      pageSizes,
      currentPage,
      sortColumn,
      refreshRates,
      refreshRate,
    } = this.state;
    const { totalCount, coinPairs } = this.getPagedData();

    return (
      <div>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid container direction="column" alignItems="center">
            <h1 className="main-title">Candle-data</h1>
          </Grid>

          <Grid container direction="row" justify="center">
            <FormControlLabel
              control={<Radio color="primary"></Radio>}
              label={"Refresh"}
              onClick={this.state.bwsc.refresh}
              checked={true}
              style={{ marginBottom: "47px" }}
            />

            <RadioGroupMUI
              items={refreshRates}
              selectedItem={refreshRate}
              onItemSelect={this.handleRefreshRateChange}
            />

            <DropdownMUI
              items={pageSizes}
              selectedItem={pageSize}
              onItemSelect={this.handlePageSizeChange}
              labelText={"Results Per Page"}
            />
          </Grid>

          <Grid item xs={12}>
            <CoinPairTable
              coinPairs={coinPairs}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onView={this.handleView}
              onSort={this.handleSort}
            />
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid>
            <PaginateMUI
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <footer
          style={{
            height: "30px",
            textAlign: "center",
            padding: "30px",
          }}
        >
          Candle-data 2020 Test3
        </footer>
      </div>
    );
  }
}

export default Main;
