import TestAskFooterBtns from "./TestAskFooterBtns";
import TestAskTitle from "./TestAskTitle";

const TestAsk = (props) => {
  return (
    <div className="test__ask">
      <TestAskTitle />
      <p className="test__container-text test__ask-question">
        Выберите неверное утверждение
      </p>
      <div className="test__container-text test__ask-text">
        Волонтёрская организация, у которой нет деятельности в интернете,
        вызывает подозрение
      </div>
      <TestAskFooterBtns />
    </div>
  );
};

export default TestAsk;
