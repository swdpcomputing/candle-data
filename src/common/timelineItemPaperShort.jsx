import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineDotAndConnector from "../common/timelineDotAndConnector";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  timelineContentContainer: {
    textAlign: "left",
  },
  paper: {
    // display: "inline-block",
    transform: "rotate(90deg)",
    textAlign: "center",
    minWidth: 50,
    width: 50
  },
}));

const TimelineItemPaperShort = ({
  itemText,
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
      <TimelineContent className={classes.timelineContentContainer}>
        <Paper className={classes.paper}>
          <Typography>{itemText}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

TimelineItemPaperShort.defaultProps = {
  itemText: "",
  dotColour: "primary",
  dotVariant: "default", // outlined - default
  connectorColour: "primary",
};

TimelineItemPaperShort.propTypes = {
  itemText: PropTypes.string.isRequired,
  dotColour: PropTypes.string.isRequired,
  dotVariant: PropTypes.string.isRequired,
  connectorColour: PropTypes.string.isRequired,
};

export default TimelineItemPaperShort;
