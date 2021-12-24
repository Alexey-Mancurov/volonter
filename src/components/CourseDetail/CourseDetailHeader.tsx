import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import Context from "../../context/context";
import actionToggle from "../../utils/actionToggle/actionToggle";
import LinkGrayUnderline from "../common/LinkGrayUnderline/LinkGrayUnderline";
import s from "./index.module.css";
import { FC } from "react";

interface PropsType  {
  time: string;
};

const CourseDetailHeader:FC<PropsType> = ({ time }) => {
  const context = useContext(Context);

  const [isFavorite, setIsFavorite] = useState(false);

  const getFavoriteToggle = () => {
    actionToggle(isFavorite, setIsFavorite);
  };

  const [modulesLength, setModulesLength] = useState(0);
  const [lessonsLength, setLessonsLength] = useState(0);

  useEffect(() => {
    setModulesLength(context.modules.items.length);
  }, [context.modules.items.length]);

  useEffect(() => {
    setLessonsLength(context.course.course.totalLessons);
  }, [context.course.course.totalLessons]);

  return (
    <div className={s.header}>
      <div className={s.block}>
        <div className={s.circle}>
          <img src={icon1} alt="" />
        </div>
        <p className={s.title}>
          Модулей: {modulesLength}, Уроков: {lessonsLength}
        </p>
      </div>
      <div className={s.block}>
        <div className={s.circle}>
          <img src={icon2} alt="" />
        </div>
        <p className={s.title}>
          Прохождение <br /> {time}
        </p>
      </div>
      <div className={s.btnBox}>
        <NavLink
          to={`/courseDetail/${context.courseId}/lesson`}
          className={s.btn}
        >
          Пройти курс
        </NavLink>
        <LinkGrayUnderline
          action={getFavoriteToggle}
          data={context.courseId}
          child={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        />
      </div>
    </div>
  );
};

export default CourseDetailHeader;
