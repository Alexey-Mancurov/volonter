import BorderBlueBtn from "../common/BorderBlueBtn";
import RedBtn from "../common/RedBtn";

const TestAskFooterBtns = (props) => {

  return (
    <div className="test__ask-wrapper">
      <BorderBlueBtn addClass={'test__ask-btn'} text={'Пройти ещё раз'}/>
      <RedBtn addClass={'test__ask-btn'} text={'Следующий урок'}/>
    </div>
  );
};

export default TestAskFooterBtns;
