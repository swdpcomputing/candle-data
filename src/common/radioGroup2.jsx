{
  /* <div class="checkboxes-and-radios">
  <h1>Radios:</h1>
  <input type="radio" name="radio-cats" id="radio-1" value="1" checked>
  <label for="radio-1">Radio Label 1</label>
  <input type="radio" name="radio-cats" id="radio-2" value="2">
  <label for="radio-2">Radio Label 2</label>
  <input type="radio" name="radio-cats" id="radio-3" value="3" checked>
  <label for="radio-3">Radio Label 3</label>
  <h1>Checkboxes:</h1>
  <input type="checkbox" name="checkbox-cats[]" id="checkbox-1" value="1" checked>
  <label for="checkbox-1">Checkbox Label 1</label>
  <input type="checkbox" name="checkbox-cats[]" id="checkbox-2" value="2">
  <label for="checkbox-2">Checkbox Label 2</label>
  <input type="checkbox" name="checkbox-cats[]" id="checkbox-3" value="3" checked>
  <label for="checkbox-3">Checkbox Label 3</label>
</div>

body {
  background: #0288D1;
}

.checkboxes-and-radios {
  margin: 80px auto 0;
  width: 280px;
  padding: 30px;
  background: #fafafa;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    padding-right: 35px;
    position: relative;
    display: block;
    font-size: 18px;
    padding: 15px 0
  }

  input[type="checkbox"], input[type="radio"] {
    position: absolute; 
    visibility: hidden !important;
  }

  input[type="checkbox"] + label, input[type="radio"] + label {

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      margin-top: -7.5px;
      box-sizing: border-box;
    }

    &:before {

      width: 30px;
      height: 15px;
      right: 0px;
      background: #fff;
      border: 1px solid #e4e3e1;
      border-radius: 15px;
    }

    &:after {
      width: 15px;
      height: 15px;
      right: 15px;
      background: #BDBDBD;
      border-radius: 50%;
      transition: all 200ms ease-out;
    }
  }

  input[type="checkbox"]:checked + label, input[type="radio"]:checked + label {

    &:after {
      right: 0px;
      background: #FF9800;
    }
  }
} */
}