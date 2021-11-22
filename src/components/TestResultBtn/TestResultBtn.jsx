import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import store from "../../store/store";

const TestResultBtn = ({ isLastLesson, isLastModule, completedResponse }) => {
  const context = useContext(Context);

  const [moduleList, setModuleList] = useState();
  useEffect(() => {
    setModuleList(store.coursesAPI.modules[context.courseId]);
  }, [context.courseId]);

  const [isAllLessonsChecked, setIsAllLessonsChecked] = useState(false);

  useEffect(() => {
    const getIsAllLessonsChecked = (() => {
      if (moduleList) {
        moduleList.items.map(
          (i) =>
            setIsAllLessonsChecked(
              store.coursesAPI.lessons[context.courseId][i.id]
            )
        );
      }
    })();
  }, [context.courseId, moduleList]);

  const [lastStep, setLastStep] = useState();
  useEffect(() => {
    isLastLesson && isLastModule && isAllLessonsChecked
      ? setLastStep("/test-completed")
      : setLastStep("/test-checking");
  }, [isLastLesson, isLastModule, isAllLessonsChecked]);

  return (
    <NavLink
      to={{
        pathname: { lastStep },
        state: { completedResponse: completedResponse },
      }}
      className="test__ask-red test__ask-btn"
    >
      Смотреть результаты
    </NavLink>
  );
};

export default TestResultBtn;
