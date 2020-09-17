import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItemPaper from "../common/timelineItemPaper";
import TimelineHorizontal from "../common/timelineHorizontal";

const CandleDataTimeline = () => {
  return (
    <Timeline align="alternate">
      <TimelineItemPaper
        oppositeContent={"v0.1"}
        title={"Initial app completed"}
        dotColour={"primary"}
        dotVariant={"default"}
        connectorColour={"secondary"}
        // prettier-ignore
        textLines={[
          {text: "-> WebSocket data from Binance API", color:'primary'},
          {text: "-> Main title with slow-scrolling candle backdrop", color:'primary'},
          {text: "-> Radio group to change automatic refresh rate", color:'primary'},
          {text: "-> Manual Refresh Button", color:'primary'},
          {text: "-> Change number of results per page", color:'primary'},
          {text: "-> Table showing PairID, Open, High, Low, Close", color:'primary'},
          {text: "-> Pagination component that dissappears if there is one page", color:'primary'},
          {text: "-> Multi-page functionality using React Router", color:'primary'},
          {text: "-> Table only shows coin-pairs that have updated since last refresh", color:'secondary'},
          {text: "-> Initial shift left ~5px when table first loads ", color:'secondary'},
        ]}
      ></TimelineItemPaper>

      <TimelineHorizontal items={[{ itemText: "Test" }]} />

      <TimelineHorizontal items={[{ itemText: "Test" }]} />
    </Timeline>
  );
};

export default CandleDataTimeline;
