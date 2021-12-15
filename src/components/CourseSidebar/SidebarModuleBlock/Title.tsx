import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/check.svg";
import Context from "../../../context/context";
import TestContext from "../../../context/testContext";
import s from "./index.module.css";

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
  const context = useContext(Context)

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
    <div className={s.item}>
      <NavLink
        to={{
          pathname: `/courseDetail/${context.courseId}/lesson`,
          state: {
            lessonIndex: lessonIndex,
            moduleIndex: moduleIndex,
          },
        }}
        className={s.text}
        onClick={() => {
          testContext.moduleMenuToggle(moduleIndex);
          testContext.lessonMenuToggle(lessonIndex);
        }}
      >
        {title}
      </NavLink>
      <div
        className={`${s.check} ${
          isChecked ? s.completed : ""
        }`}
      >
        <img src={check} alt="" />
      </div>
    </div>
  );
};

export default Title;
