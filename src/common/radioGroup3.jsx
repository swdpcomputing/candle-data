import React from "react";
import '../css/radioGroup3.css'

const RadioGroupNeumorphic = () => {
  return (
    <div className="radiogroup">
      <div className="wrapper">
        <input className="state" type="radio" name="app" id="a" value="a" />
        <label className="label" for="a">
          <div className="indicator"></div>
          <span className="text">a) close</span>
        </label>
      </div>
      <div className="wrapper">
        <input className="state" type="radio" name="app" id="b" value="b" />
        <label className="label" for="b">
          <div className="indicator"></div>
          <span className="text">b) remove</span>
        </label>
      </div>
      <div className="wrapper">
        <input className="state" type="radio" name="app" id="c" value="c" />
        <label className="label" for="c">
          <div className="indicator"></div>
          <span className="text">c) delete</span>
        </label>
      </div>
      <div className="wrapper">
        <input className="state" type="radio" name="app" id="d" value="d" />
        <label className="label" for="d">
          <div className="indicator"></div>
          <span className="text">d) all of the above</span>
        </label>
      </div>
    </div>
  );
};

export default RadioGroupNeumorphic;