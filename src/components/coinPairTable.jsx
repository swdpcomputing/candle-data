import React, { Component } from "react";
import Likeheart from "../common/likeheart";
import Table from "../common/table";

class CoinPairTable extends Component {
  columns = [
    { path: "coinPairId", label: "Pair" },
    { path: "open", label: "Open" },
    { path: "high", label: "High" },
    { path: "low", label: "Low" },
    { path: "close", label: "Close" },
    {
      label: "Pin",
      key: "pin",
      content: (coinPair) => (
        <Likeheart
          liked={coinPair.liked}
          onClick={() => this.props.onLike(coinPair)}
        />
      ),
    },
    {
      label: "View",
      key: "view",
      content: (coinPair) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => this.props.onView(coinPair)}
        >
          Open
        </button>
      ),
    },
  ];

  render() {
    const { coinPairs, sortColumn, onSort } = this.props; // interface
    return (
      <Table
        columns={this.columns}
        data={coinPairs}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default CoinPairTable;