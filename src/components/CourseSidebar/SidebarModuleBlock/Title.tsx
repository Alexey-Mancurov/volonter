import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/check.svg";
import TestContext from "../../../context/testContext";

type TProps = {
  indexLesson: number
  indexModule:number
  title: string;
  isChecked: boolean;
}
const Title:React.FC<TProps> = ({
  indexLesson,
  title,
  isChecked,
  indexModule,
}) => {

  const testContext = useContext(TestContext)
  
  const [lessonIndex, setLessonIndex] = useState<number|undefined>();
  useEffect(() => {
    setLessonIndex(indexLesson);
  }, [indexLesson]);

  const [moduleIndex, setModuleIndex] = useState<number|undefined>();
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
          testContext.moduleMenuToggle(moduleIndex);
          testContext.lessonMenuToggle(lessonIndex);
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
