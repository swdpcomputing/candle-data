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
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineItemPaper = ({
  oppositeContent,
  title,
  dotColour,
  textLines,
}) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography>{oppositeContent}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color={dotColour}></TimelineDot>
        <TimelineConnector backgroundColor={theme.palette.secondary.main} />
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

export default TimelineItemPaper;
