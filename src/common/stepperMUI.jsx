import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: "#FFBF00 !important",
  },
}));

const StepperMUI = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={0} alternativeLabel>
        {items.map((item) => (
          <Step key={item.itemText}>
            <StepLabel
              StepIconProps={{
                classes: {
                  active: classes.icon,
                },
              }}
            >
              {item.itemText}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default StepperMUI;