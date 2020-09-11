import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DropdownMUI = ({ items, selectedItem, onItemSelect }) => {
  const classes = useStyles();
  //const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    onItemSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="label">Coins per page</InputLabel> */}
        <Select
          style={{ height: "25px", marginBottom: "50px" }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedItem}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

DropdownMUI.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default DropdownMUI;
