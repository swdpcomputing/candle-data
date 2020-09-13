import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '15px',
    borderColor: theme.palette.grey.main,
    height: "25px",
    top: '1px'
  },
}));

const DropdownMUI = ({ items, selectedItem, onItemSelect }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    onItemSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          className={classes.selectEmpty}
          labelId="label"
          id="id"
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
