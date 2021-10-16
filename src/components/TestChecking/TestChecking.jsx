import { useLocation } from "react-router";
import TestCheckingAsks from "../TestCheckingAsks/TestCheckingAsk";
import TestCheckingHeader from "../TestCheckingHeader/TestCheckingHeader";
import TestCheckingBtns from "../TestCheckingAsks/TestCheckingBtns";


const TestChecking = (props) => {
  let location = useLocation();

  return (
    <div className="test__container">
      <TestCheckingHeader
        successTest={location.state.completedResponse.successTest}
      />
      <p className="test__container-text">
        Ваш результат:{" "}
        <span>
          {" "}
          {location.state.completedResponse.successAsks} балов из{" "}
          {location.state.completedResponse.totalAsk}{" "}
        </span>
      </p>
      <TestCheckingAsks dataList={location.state.completedResponse.noCorrectAsks}/>
      <TestCheckingBtns nextLesson={props.nextLesson}/>
    </div>
  );
};

export default TestChecking;
