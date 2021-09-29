import TestCheckingAsks from "../TestCheckingAsks/TestCheckingAsk";
import TestCheckingHeader from "../TestCheckingHeader/TestCheckingHeader";

const TestChecking = (props) => {
  return (
    <div className="test__container">
      <TestCheckingHeader />
      <p className="test__container-text">
        Ваш результат: <span> 0 балов из 1 </span>
      </p>
      <p className="test__container-text">
        Вопросы, на которые вы ответили неправильно:
      </p>
      <TestCheckingAsks />
    </div>
  );
};

export default TestChecking;
