import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItemPaper from "../common/timelineItemPaper";
import StepperMUIWrapper from "../common/stepperMUIWrapper";

const CandleDataTimeline = () => {
  return (
    <Timeline align="alternate">
      <TimelineItemPaper
        oppositeContent={"v0.1"}
        title={"Initial app completed"}
        dotColour={"primary"}
        dotVariant={"default"}
        connectorColour={"primary"}
        // prettier-ignore
        textLines={[
          {text: "-> WebSocket data from Binance API - All Market Mini-Ticker", color:'primary'},
          {text: "-> Main title with slow-scrolling candle backdrop", color:'primary'},
          {text: "-> Radio group to change automatic refresh rate", color:'primary'},
          {text: "-> Manual Refresh Button", color:'primary'},
          {text: "-> Change number of results per page", color:'primary'},
          {text: "-> Table showing PairID, Open, High, Low, Close", color:'primary'},
          {text: "-> Pagination component that dissappears if there is one page", color:'primary'},
          {text: "-> Multi-page functionality using React Router", color:'primary'},
          {text: "-> Table only shows trading-pairs that have updated since last refresh", color:'secondary'},
          {text: "-> Like button inactive, open button inactive ", color:'secondary'},
          {text: "-> Initial shift left ~5px when table first loads ", color:'secondary'},
        ]}
      ></TimelineItemPaper>

      <StepperMUIWrapper
        titleText={"API calls, in addition to existing Web-Socket updates"}
        oppositeContent={"v0.11"}
        // prettier-ignore
        items={[
          { itemText: "Add select time-period component" },
          { itemText: "Fetch historial data, for the selected time-period" },
          { itemText: "Display active trading-pairs" },
          { itemText: "Mini-Ticker to update historical data" },
        ]}
        activeStep={-1}
        dotColour={"secondary"}
        dotVariant={"outlined"}
        connectorColour={"secondary"}
      />

      <StepperMUIWrapper
        titleText={"Further sorting functionality"}
        oppositeContent={"v0.12"}
        // prettier-ignore
        items={[
          { itemText: "Sort by recently updated" },
          { itemText: "Sort by largest % rise since last candle-close" },
          { itemText: "Sort by largest % drop since last candle-close" },
        ]}
        activeStep={-1}
        dotColour={"secondary"}
        dotVariant={"outlined"}
        connectorColour={"secondary"}
      />

      <StepperMUIWrapper
        titleText={"Filtering & Pinning"}
        oppositeContent={"v0.13"}
        // prettier-ignore
        items={[
          { itemText: "Drop-down filtering component" },
          { itemText: "Filter by trading-pair market (UDST, BTC etc)" },
          { itemText: "Pin trading-pair to top of table" },
        ]}
        activeStep={-1}
        dotColour={"secondary"}
        dotVariant={"outlined"}
        connectorColour={"secondary"}
      />

      <StepperMUIWrapper
        titleText={"Open trading-pair chart & details"}
        oppositeContent={"v0.2"}
        // prettier-ignore
        items={[
          { itemText: "Drop-downdown / drawer / collapsible for each table row"},
          { itemText: "Candlestick chart in drop-down" },
          { itemText: "Trading pair details in drop-down" },
        ]}
        activeStep={-1}
        dotColour={"secondary"}
        dotVariant={"outlined"}
        connectorColour={"secondary"}
      />
    </Timeline>
  );
};

export default CandleDataTimeline;
