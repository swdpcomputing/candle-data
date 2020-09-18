import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineDotAndConnector from "./timelineDotAndConnector";
import StepperMUI from "./stepperMUI";

const useStyles = makeStyles({
  paper: {
    padding: "6px 16px",
  },
  timeline: {
    transform: "rotate(90deg)",
    height: 130,
  },
});

const StepperMUIWrapper = ({
  items,
  dotColour,
  dotVariant,
  connectorColour,
}) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineDotAndConnector
        dotColor={dotColour}
        dotVariant={dotVariant}
        connectorColour={connectorColour}
      />
      <TimelineContent className={classes.timelineContent}>
        <Paper elevation={24} className={classes.paper}>
          <Typography variant="h6" component="h1">
            Title
          </Typography>
          <StepperMUI items={items}></StepperMUI>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default StepperMUIWrapper;
