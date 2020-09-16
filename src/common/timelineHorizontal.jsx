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
  timeline: {
    transform: "rotate(90deg)",
    height: 130,
  },
  timelineContentContainer: {
    textAlign: "left",
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50,
  },
  timelineIcon: {
    transform: "rotate(-90deg)",
  },
});

export default function TimelineHorizontal() {
  const classes = useStyles();

  return (
    // Create map that rolls out typography, connectors and dots. has to reverse.

    <Timeline className={classes.timeline} align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          {/* <CheckCircleOutlineIcon
              color="primary"
              className={classes.timelineIcon}
            /> */}
          <TimelineDot color="primary"></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Eat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <PauseCircleFilledIcon
              color="primary"
              className={classes.timelineIcon}
            /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Code</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <CachedIcon color="primary" className={classes.timelineIcon} /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <CachedIcon color="primary" className={classes.timelineIcon} /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Repeat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          {/* <ErrorIcon color="primary" className={classes.timelineIcon} /> */}
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContentContainer}>
          <Paper className={classes.timelineContent}>
            <Typography>Sleep</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
