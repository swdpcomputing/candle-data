import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineDotAndConnector from "../common/timelineDotAndConnector";
import PropTypes from "prop-types";

const TimelineItemPaperShort = ({
  itemText,
  dotColour,
  dotVariant,
  connectorColour,
}) => {
  return (
    <TimelineItem>
      <TimelineDotAndConnector
        dotColor={dotColour}
        dotVariant={dotVariant}
        connectorColour={connectorColour}
      />
      <TimelineContent>
        <Paper>
          <Typography>{itemText}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

TimelineItemPaperShort.defaultProps = {
  dotColour: "primary",
  dotVariant: "default", // outlined - default
  connectorColour: "primary",
};

TimelineItemPaperShort.propTypes = {
  itemText: PropTypes.string.isRequired,
};

export default TimelineItemPaperShort;
