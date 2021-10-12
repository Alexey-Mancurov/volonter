import { useState } from "react";
import TestAsk from "../TestAsk/TestAsk";
import TestAskActions from "../TestAskActions/TestAskActions";
import TestHeader from "../TestHeader/TestHeader";

const TestAskList = (props) => {
  let id = props.id;

  let [checkedOption, setCheckedOption] = useState(null);

  const getCheckedOption = (checkedOption) => {
    setCheckedOption(checkedOption);
    // console.log(checkedOption, id);
  };

  const localNextAsk = () => {
    props.nextAsk(id, checkedOption);
  };
  const localEndTest = () => {
    props.endTest(id, checkedOption);
  };

  return props.currentAsk === props.id ? (
    <div id={props.id}>
      <TestHeader
        ask={props.ask}
        id={props.id}
        key={props.id}
        currentAsk={props.currentAsk}
        askCount={props.askCount}
      />
      <TestAsk
        options={props.options}
        id={props.id}
        key={props.id}
        // currentAsk={currentAsk}
        // nextAsk={nextAsk}
        // prevAsk={prevAsk}
        askCount={props.askCount}
        getCheckedOption={getCheckedOption}
      />
      <TestAskActions
        currentAsk={props.currentAsk}
        // nextAsk={props.nextAsk}
        prevAsk={props.prevAsk}
        askCount={props.askCount}
        localNextAsk={localNextAsk}
        localEndTest={localEndTest}
      />
    </div>
  ) : (
    ""
  );
};

export default TestAskList;
