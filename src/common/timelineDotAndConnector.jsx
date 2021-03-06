import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";

const useStyles = makeStyles((theme) => ({
  primaryClass: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryClass: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineDotAndConnector = ({
  dotColour,
  dotVariant,
  connectorColour,
}) => {
  const classes = useStyles();

  return (
    <TimelineSeparator>
      <TimelineDot color={dotColour} variant={dotVariant}></TimelineDot>
      <TimelineConnector
        className={
          connectorColour === "primary"
            ? classes.primaryClass
            : classes.secondaryClass
        }
      />
    </TimelineSeparator>
  );
};

TimelineDotAndConnector.defaultProps = {
  dotColour: "primary",
  dotVariant: "default", // outlined - default
  connectorColour: "primary",
};

export default TimelineDotAndConnector;
