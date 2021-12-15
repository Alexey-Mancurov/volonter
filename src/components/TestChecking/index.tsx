import { useLocation } from "react-router";
import TestCheckingAsks from "../TestCheckingAsks";
import TestCheckingHeader from "./TestCheckingHeader";
import TestCheckingBtns from "./TestCheckingBtns";
import Preloader from "../common/Preloader";
import s from './index.module.css'


const TestChecking = () => {
  const location = useLocation();

  if (location.state) {
    // @ts-ignore
    const completedResponse = location.state.completedResponse;

    return (
      <div className={s.container}>
        <TestCheckingHeader successTest={completedResponse.successTest} />
        <p className={s.text}>
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
