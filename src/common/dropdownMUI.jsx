import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
    labelPlacement: 'end'
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    border: "2px solid",
    borderRadius: "15px",
    borderColor: theme.palette.grey.main,
    height: "25px",
  },
}));

const DropdownMUI = ({ items, selectedItem, onItemSelect, labelText }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    onItemSelect(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          className={classes.selectEmpty}
          labelId="labelID"
          id="id"
          value={selectedItem}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem value={item} key={item}>{item}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{labelText}</FormHelperText>
      </FormControl>
    </div>
  );
};

DropdownMUI.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  selectedItem: PropTypes.number.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default DropdownMUI;
