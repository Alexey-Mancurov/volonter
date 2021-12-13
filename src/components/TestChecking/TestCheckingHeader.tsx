import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";

type TProps = {
  successTest: boolean;
};

const TestCheckingHeader:React.FC<TProps> = ({ successTest }) => {
  const context = useContext(Context)
  return (
    <div className="test__container-wrapper">
      {successTest ? (
        <div className="test__container-title">Тест успешно выполнен</div>
      ) : (
        <div className="test__container-title">Тест не выполнен</div>
      )}
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className="test__container-backBtn">
        Назад к уроку
      </NavLink>
    </div>
  );
};
export default TestCheckingHeader;
