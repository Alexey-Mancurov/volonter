import { useState } from "react";
import CheckList from "./CheckList";
import Actions from "./Actions";
import Header from "./Header";

const TestAsks = (props) => {
  const [checkedOption, setCheckedOption] = useState(null);

  const getCheckedOption = (checkedOption) => {
    setCheckedOption(checkedOption);
  };

  const localNextAsk = () => {
    props.nextAsk(props.id, checkedOption);
  };

  return (
    props.currentAsk === props.id && (
      <div>
        <Header
          ask={props.ask}
          currentAsk={props.currentAsk}
          askCount={props.askCount}
        />
        <CheckList
          options={props.options}
          getCheckedOption={getCheckedOption}
        />
        <Actions
          currentAsk={props.currentAsk}
          prevAsk={props.prevAsk}
          askCount={props.askCount}
          localNextAsk={localNextAsk}
          completedResponse={props.completedResponse}
        />
      </div>
    )
  );
};

export default TestAsks;
