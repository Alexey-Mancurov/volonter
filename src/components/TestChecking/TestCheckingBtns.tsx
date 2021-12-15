import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import TestContext from "../../context/testContext";
import BorderBlueBtn from "../common/BorderBlueBtn/BorderBlueBtn";
import RedBtn from "../common/RedBtn/RedBtn";
import s from './index.module.css'

const TestCheckingBtns = () => {
  const context = useContext(Context)
  const testContext = useContext(TestContext)

  return (
    <div className={s.wrapper}>
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className={s.btn}>
        <BorderBlueBtn addClass={s.addClass} text={"Пройти ещё раз"} />
      </NavLink>
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className={s.btn} onClick={testContext.nextLesson}>
        <RedBtn addClass={s.askBtn} text={"Следующий урок"} />
      </NavLink>
    </div>
  );
};

export default TestCheckingBtns;
