import { NavLink } from "react-router-dom";

const TestNotCompletedHeader = (props) => {
  return (
    <div className="test__container-wrapper">
      {props.successTest
      ? <div className="test__container-title">Тест успешно выполнен</div>
      : <div className="test__container-title">Тест не выполнен</div>
      }
      <NavLink to={"/lesson"} className="test__container-backBtn">
        Назад к уроку
      </NavLink>
    </div>
  );
};
export default TestNotCompletedHeader;
