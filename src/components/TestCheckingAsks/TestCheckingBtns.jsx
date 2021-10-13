import { NavLink } from "react-router-dom";
import BorderBlueBtn from "../common/BorderBlueBtn";
import RedBtn from "../common/RedBtn";

const TestAskFooterBtns = (props) => {
  let displayBlock = {
    display: "block",
  };
  return (
    <div className="test__ask-wrapper">
      <NavLink to={"/lesson"} className={"test__ask-btn"}>
        <BorderBlueBtn addClass={"test__ask-btn"} text={"Пройти ещё раз"} />
      </NavLink>
      <NavLink to={"/lesson"}>
        <RedBtn
          addClass={"test__ask-btn"}
          text={"Следующий урок"}
        />
      </NavLink>
    </div>
  );
};

export default TestAskFooterBtns;
