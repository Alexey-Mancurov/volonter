import { useState } from "react";
import { useEffect } from "react";
import TestAskActions from "../TestAskActions/TestAskActions";
import TestAskItem from "../TestAskItem/TestAskItem";

const TestAsk = (props) => {
  const askList = props.options.map((i, index) => (
    <TestAskItem title={i} key={index} index={index} getCheckedOption={props.getCheckedOption}/>
  ));

  return (
    <div className="test__ask">
      {askList}
    </div>
  );
};

export default TestAsk;
