import { NavLink } from "react-router-dom";

const TestNotCompletedHeader = (props) => {
  return (
    <div className="test__container-wrapper">
      <div className="test__container-title">Тест не завершен</div>
      <NavLink to={"/courses/29/modules/2989/lessons/2989"} className="test__container-backBtn">
        Назад к уроку
      </NavLink>
    </div>
  );
};
export default TestNotCompletedHeader;
