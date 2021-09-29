import TestCheckingBtns from "./TestCheckingBtns";
import TestCheckingTitle from "./TestCheckingTitle";

const TestCheckingdAsk = (props) => {
  return (
    <div className="test__ask">
      <TestCheckingTitle />

      <p className="test__container-text test__ask-question">
        Выберите неверное утверждение
      </p>
      <div className="test__container-text test__ask-text">
        Волонтёрская организация, у которой нет деятельности в интернете,
        вызывает подозрение
      </div>
      <TestCheckingBtns />
    </div>
  );
};

export default TestCheckingdAsk;
