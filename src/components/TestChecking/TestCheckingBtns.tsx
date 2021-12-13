import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import TestContext from "../../context/testContext";
import BorderBlueBtn from "../common/BorderBlueBtn";
import RedBtn from "../common/RedBtn";

const TestCheckingBtns = () => {
  const context = useContext(Context)
  const testContext = useContext(TestContext)

  return (
    <div className="test__ask-wrapper">
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className={"test__ask-btn"}>
        <BorderBlueBtn addClass={"test__ask-btn"} text={"Пройти ещё раз"} />
      </NavLink>
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className={"test__ask-btn"} onClick={testContext.nextLesson}>
        <RedBtn addClass={"test__ask-btn"} text={"Следующий урок"} />
      </NavLink>
    </div>
  );
};

export default TestCheckingBtns;
