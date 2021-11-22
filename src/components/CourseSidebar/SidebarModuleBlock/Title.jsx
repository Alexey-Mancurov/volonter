import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/check.svg";

const Title = ({
  indexLesson,
  title,
  isChecked,
  indexModule,
  moduleMenuToggle,
  lessonMenuToggle,
}) => {
  
  const [lessonIndex, setLessonIndex] = useState();
  useEffect(() => {
    setLessonIndex(indexLesson);
  }, [indexLesson]);

  const [moduleIndex, setModuleIndex] = useState();
  useEffect(() => {
    setModuleIndex(indexModule);
  }, [indexModule]);

  return (
    <div className="test__sidebar-block-item">
      <NavLink
        to={{
          pathname: `/lesson`,
          state: {
            lessonIndex: lessonIndex,
            moduleIndex: moduleIndex,
          },
        }}
        className="test__sidebar-text"
        onClick={() => {
          moduleMenuToggle(moduleIndex);
          lessonMenuToggle(lessonIndex);
        }}
      >
        {title}
      </NavLink>
      <div
        className={`test__sidebar-block-check ${
          isChecked ? "test__sidebar-block-check-completed" : ""
        }`}
      >
        <img src={check} alt="" />
      </div>
    </div>
  );
};

export default Title;
