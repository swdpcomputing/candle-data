import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  paper: {
    padding: "6px 16px",
  },
  timeline: {
    transform: "rotate(270deg)",
    height: 130,
  },
  timelineContentContainer: {
    textAlign: "left",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(90deg)",
    textAlign: "center",
    minWidth: 50,
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
});

const TimelineHorizontal = ({ items }) => {
  const classes = useStyles();

  return (
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
          <Timeline className={classes.timeline} align="alternate">
            {items.map((item) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot></TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContentContainer}>
                  <Paper className={classes.timelineContent}>
                    <Typography>{item.itemText}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineHorizontal;
