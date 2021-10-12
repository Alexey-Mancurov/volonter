import { useState } from "react";

const TestAskItem = (props) => {
  
  const localGetCheckedOption = () => {
    props.getCheckedOption(props.index);
  };

  return (
    <label className="test__ask-labelRadio">
      <input
        name="ask-1"
        type="radio"
        className="test__ask-inputRadio"
        onChange={localGetCheckedOption}
      ></input>
      <span className="test__ask-checkboxRadio"></span>
      <span className="test__ask-textRadio">{props.title}</span>
    </label>
  );
};

export default TestAskItem;
