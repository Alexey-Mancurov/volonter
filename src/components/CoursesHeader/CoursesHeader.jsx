import { useState } from "react";
import CourseLevel from "../CourseLevel/CourseLevel";
import CoursesHeaderItem from "../CoursesHeaderItem/CoursesHeaderItem";

const CoursesListHeader = (props) => {
  let [state, setState] = useState([
    { text: "Все курсы", isActiveFilter: true, action: "allCourses" },
    { text: "Избранные", isActiveFilter: false, action: "filterFavorits" },
    { text: "Пройденные", isActiveFilter: false, action: "filterCompleted" },
  ]);

  let [level, setLevel] = useState([
    { text: "Базовый", isActive: false, action: "base" },
    { text: "Продвинутый", isActive: false, action: "advanced" },
  ]);

  let [isActive, setIsActive] = useState(false);

  const isActiveToggle = (index) => {
    setState(
      state.map((i, ind) => {
        if (ind === index) {
          return { ...i, isActiveFilter: true };
        }
        if (ind !== index) {
          return { ...i, isActiveFilter: false };
        }
      })
    );
  };

  const isActiveLevel = (index) => {
    setLevel(
      level.map((i, ind) => {
        if (ind === index) {
          return { ...i, isActive: true };
        }
        if (ind !== index) {
          return { ...i, isActive: false };
        }
      })
    );
  };

  let itemList = state.map((i, index) => (
    <CoursesHeaderItem
      key={index}
      index={index}
      text={i.text}
      isActiveFilter={i.isActiveFilter}
      action={i.action}
      isActiveToggle={isActiveToggle}
      isActive={isActive}
      allCourses={props.allCourses}
      filterFavorits={props.filterFavorits}
      filterCompleted={props.filterCompleted}
    />
  ));

  let levelList = level.map((i, index) => (
    <CourseLevel
      key={index}
      index={index}
      text={i.text}
      isActive={i.isActive}
      action={i.action}
      filterBase={props.filterBase}
      filterAdvanced={props.filterAdvanced}
      isActiveLevel={isActiveLevel}
    />
  ));

  return (
    <div className="cource__tab-wrapper">
      <ul className="tabs tabs__course">{itemList}</ul>
      <div className="cource__level">{levelList}</div>
    </div>
  );
};

export default CoursesListHeader;
