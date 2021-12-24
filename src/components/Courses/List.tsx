import CourseItem from "./CourseItem";
import s from "./index.module.css";
import { FC } from "react";

interface TProps {
  courses: Array<any> | undefined;
};

const List: FC<TProps> = ({ courses }) => {
  const courseList = () => {
    if (courses && courses.length > 0) {
      return courses.map((i) => (
        <CourseItem
          key={i.id}
          id={i.id}
          title={i.title}
          description={i.description}
          tier={i.tier}
          author={i.author}
        />
      ));
    } else {
      return (
        <div className={s.info}>
          <p className={s.infoText}>Курсы с заданными параметрами не найдены</p>
        </div>
      );
    }
  };

  return <div className={s.list}>{courseList()}</div>;
};

export default List;
