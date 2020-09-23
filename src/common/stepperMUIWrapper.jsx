import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
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
  titleText,
  oppositeContent,
  items,
  activeStep,
  dotColour,
  dotVariant,
  connectorColour,
}) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography>{oppositeContent}</Typography>
      </TimelineOppositeContent>
      <TimelineDotAndConnector
        dotColour={dotColour}
        dotVariant={dotVariant}
        connectorColour={connectorColour}
      />
      <TimelineContent className={classes.timelineContent}>
        <Paper elevation={24} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {titleText}
          </Typography>
          <StepperMUI items={items} activeStep={activeStep}></StepperMUI>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

StepperMUIWrapper.defaultProps = {
  oppositeContent: "",
  titleText: "Title",
  activeStep: 0,
  dotColour: "primary",
  dotVariant: "default", // outlined - default
  connectorColour: "primary",
};

StepperMUIWrapper.propTypes = {
  items: PropTypes.array.isRequired,
};

export default StepperMUIWrapper;
