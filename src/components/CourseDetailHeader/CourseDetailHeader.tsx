import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { coursesAPI } from "../../api/api";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import Context from "../../context/context";
import LinkGrayUnderline from "../common/LinkGrayUnderline";

type PropsType ={
  time: string
}

const CourseDetailHeader = ({time}:PropsType) => {
  const context = useContext(Context);

  const [isFavorite, setIsFavorite] = useState();

  const favoriteToggle = (courseId:number) => {
    coursesAPI.courseFavorite(courseId).then((response:any) => {
      if (response.success) {
        setIsFavorite(response.isFavorite);
      }
    });
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
    <div className="course__header">
      <div className="course__header-block">
        <div className="course__header-circle">
          <img src={icon1} alt="" />
        </div>
        <p className="course__header-title">
          Модулей: {modulesLength}, Уроков: {lessonsLength}
        </p>
      </div>
      <div className="course__header-block">
        <div className="course__header-circle">
          <img src={icon2} alt="" />
        </div>
        <p className="course__header-title">
          Прохождение <br /> {time}
        </p>
      </div>
      <div className="course__header-btn-box">
        <NavLink to={"/lesson"} className="course__header-btn">
          Пройти курс
        </NavLink>
        <LinkGrayUnderline
          action={favoriteToggle}
          data={context.courseId}
          child={
            isFavorite ? "Удалить из избранного" : "Добавить в избранное"
          }
        />
      </div>
    </div>
  );
};

export default CourseDetailHeader;