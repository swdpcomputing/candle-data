import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  if (typeof items === "object") items = Object.keys(items); // allows a 1d array of items, or an object with items as keys

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      {items.map((item) => (
        <label
          key={item + "_label"}
          className={
            item === selectedItem
              ? "btn btn-secondary active"
              : "btn btn-secondary"
          }
        >
          <input
            key={item + "_input"}
            type="radio"
            autoComplete="off"
            onClick={() => onItemSelect(item)}
          />{" "}
          {item}
        </label>
      ))}
    </div>
  );
};

RadioGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

RadioGroup.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
  ]),
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default RadioGroup;