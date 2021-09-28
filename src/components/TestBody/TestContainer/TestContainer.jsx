import TestAsk from "./TestAsk/TestAsk";
import TestContainerHeader from "./TestContainerHeader";

const TestContainer = (props) => {

  return (
    <div className="test__container">
      <TestContainerHeader />
      <p className="test__container-text">
        Ваш результат: <span> 0 балов из 1 </span>
      </p>
      <p className="test__container-text">
        Вопросы, на которые вы ответили неправильно:
      </p>
      <TestAsk />
    </div>
  );
};

export default TestContainer;
