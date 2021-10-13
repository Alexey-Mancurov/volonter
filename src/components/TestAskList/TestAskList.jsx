import { useState } from "react";
import TestAsk from "../TestAsk/TestAsk";
import TestAskActions from "../TestAskActions/TestAskActions";
import TestHeader from "../TestHeader/TestHeader";

const TestAskList = (props) => {
  let id = props.id+1;
  

  let [checkedOption, setCheckedOption] = useState(null);

  const getCheckedOption = (checkedOption) => {
    setCheckedOption(checkedOption);
  };

  const localNextAsk = () => {
    props.nextAsk(id, checkedOption);
  };
  // const localEndTest = () => {
  //   props.endTest(id, checkedOption);
  // };

  return props.currentAsk === id ? (
    <div id={id}>
      <TestHeader
        ask={props.ask}
        id={id}
        key={id}
        currentAsk={props.currentAsk}
        askCount={props.askCount}
      />
      <TestAsk
        options={props.options}
        id={id}
        key={id}
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
        // localEndTest={localEndTest}
        completedResponse={props.completedResponse}
      />
    </div>
  ) : (
    ""
  );
};

export default TestAskList;
