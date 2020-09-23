import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
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

const StepperMUI = ({ items, activeStep }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {items.map((item) => (
          <Step key={"step" + item.itemText}>
            <StepLabel
              key={"stepLabel" + item.itemText}
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

StepperMUI.defaultProps = {
  activeStep: 0,
};

StepperMUI.propTypes = {
  items: PropTypes.array.isRequired,
};

export default StepperMUI;
