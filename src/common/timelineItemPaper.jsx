import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TimelineDotAndConnector from "../common/timelineDotAndConnector";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
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
}));

const TimelineItemPaper = ({
  oppositeContent,
  title,
  dotColour,
  dotVariant,
  connectorColour,
  textLines,
}) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography>{oppositeContent}</Typography>
      </TimelineOppositeContent>

      <TimelineDotAndConnector
        dotColor={dotColour}
        dotVariant={dotVariant}
        connectorColour={connectorColour}
      />

      <TimelineContent className={classes.timelineContentContainer}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          {textLines.map((textLine) => (
            <Typography color={textLine.color} key={textLine.text}>{textLine.text}</Typography>
          ))}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

TimelineItemPaper.defaultProps = {
  oppositeContent: "",
  title: "Title",
  dotColour: "primary",
  dotVariant: "default", // outlined - default
  connectorColour: "primary",
  textLines: [],
};

TimelineItemPaper.propTypes = {
  textLines: PropTypes.array.isRequired,
};

export default TimelineItemPaper;
