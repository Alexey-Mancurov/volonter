import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import s from './index.module.css'
import { FC } from "react";


interface TProps {
  successTest: boolean;
};

const TestCheckingHeader:FC<TProps> = ({ successTest }) => {
  const context = useContext(Context)
  return (
    <div className={s.containerWrapper}>
      {successTest ? (
        <div className={s.title}>Тест успешно выполнен</div>
      ) : (
        <div className={s.title}>Тест не выполнен</div>
      )}
      <NavLink to={`/courseDetail/${context.courseId}/lesson`} className={s.backBtn}>
        Назад к уроку
      </NavLink>
    </div>
  );
};
export default TestCheckingHeader;
