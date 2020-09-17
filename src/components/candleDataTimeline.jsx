import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineItemPaper from "../common/timelineItemPaper";
import TimelineHorizontal from "../common/timelineHorizontal";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CandleDataTimeline = () => {
  const [horizontalParameters1] = useState([{ itemText: "Test" }]);

  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItemPaper
        oppositeContent={"v0.1"}
        title={"Initial app completed"}
        dotColour={'primary'}
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
          {text: "-> Table only shows coin-pairs that have updated ", color:'secondary'},
          {text: "-> Initial shift left ~5px when table first loads ", color:'secondary'},
        ]}
      ></TimelineItemPaper>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">{/* <LaptopMacIcon /> */}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={24} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Title
            </Typography>
            {/* <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography> */}
            <TimelineHorizontal items={horizontalParameters1} />
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">{/* <RepeatIcon /> */}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CandleDataTimeline;
