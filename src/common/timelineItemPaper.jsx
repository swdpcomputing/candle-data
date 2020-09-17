import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
  primaryClass: {
    backgroundColor: theme.palette.primary.main,
  },
  secondaryClass: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineItemPaper = ({
  oppositeContent,
  title,
  dotColour,
  dotVariant, // outlined - default
  connectorColour,
  textLines,
}) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography>{oppositeContent}</Typography>
      </TimelineOppositeContent>
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
      <TimelineContent className={classes.timelineContentContainer}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          {textLines.map((textLine) => (
            <Typography color={textLine.color}>{textLine.text}</Typography>
          ))}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

TimelineItemPaper.defaultProps = {
  oppositeContent: "",
  title: "",
  dotColour: 'primary',
  dotVariant: 'default', // outlined - default
  connectorColour: 'primary',
  textLines: [],
};

TimelineItemPaper.propTypes = {
  oppositeContent: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dotColour: PropTypes.string.isRequired,
  dotVariant: PropTypes.string.isRequired,
  connectorColour: PropTypes.string.isRequired,
  textLines: PropTypes.array.isRequired,
};

export default TimelineItemPaper;
