import TestNotCompletedAsk from "../TestCheckingAsks/TestCheckingAsk";
import TestNotCompletedHeader from "../TestNotCompletedHeader/TestNotCompletedHeader";

const TestChecking = (props) => {
  return (
    <div className="test__container">
      <TestNotCompletedHeader />
      <p className="test__container-text">
        Ваш результат: <span> 0 балов из 1 </span>
      </p>
      <p className="test__container-text">
        Вопросы, на которые вы ответили неправильно:
      </p>
      <TestNotCompletedAsk />
    </div>
  );
};

export default TestChecking;
