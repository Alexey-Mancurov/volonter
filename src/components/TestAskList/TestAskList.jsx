import { useState } from "react";
import TestAsk from "../TestAsk/TestAsk";
import TestAskActions from "../TestAskActions/TestAskActions";
import TestHeader from "../TestHeader/TestHeader";

const TestAskList = (props) => {
  
  const [checkedOption, setCheckedOption] = useState(null);

  const getCheckedOption = (checkedOption) => {
    setCheckedOption(checkedOption);
  };

  const localNextAsk = () => {
    props.nextAsk(props.id, checkedOption);
  };

  return props.currentAsk === props.id && (
    <div>
      <TestHeader
        ask={props.ask}
        currentAsk={props.currentAsk}
        askCount={props.askCount}
      />
      <TestAsk
        options={props.options}
        getCheckedOption={getCheckedOption}
      />
      <TestAskActions
        currentAsk={props.currentAsk}
        prevAsk={props.prevAsk}
        askCount={props.askCount}
        localNextAsk={localNextAsk}
        completedResponse={props.completedResponse}
      />
    </div>
  );
};

export default TestAskList;
