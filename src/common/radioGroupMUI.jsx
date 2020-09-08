import React from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RadioGroupMUI = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  if (typeof items === "object") items = Object.keys(items); // allows a 1d array of items, or an object with items as keys

  const handleChange = (e) => {
    onItemSelect(e.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row value={selectedItem} onChange={handleChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioGroupMUI.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

RadioGroupMUI.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default RadioGroupMUI;