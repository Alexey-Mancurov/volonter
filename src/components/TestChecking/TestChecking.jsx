import { useLocation } from "react-router";
import TestCheckingAsks from "../TestCheckingAsks/TestCheckingAsk";
import TestCheckingHeader from "./TestCheckingHeader";
import TestCheckingBtns from "./TestCheckingBtns";
import Preloader from "../common/Preloader";

const TestChecking = () => {
  const location = useLocation();

  if (location.state) {
    const completedResponse = location.state.completedResponse;

    return (
      <div className="test__container">
        <TestCheckingHeader successTest={completedResponse.successTest} />
        <p className="test__container-text">
          Ваш результат:{" "}
          <span>
            {completedResponse.successAsks} балов из{" "}
            {completedResponse.totalAsk}
          </span>
        </p>
        <TestCheckingAsks dataList={completedResponse.noCorrectAsks} />
        <TestCheckingBtns />
      </div>
    );
  }
  return <Preloader />;
};

export default TestChecking;
