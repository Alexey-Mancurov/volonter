import { useState, useContext, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";
import store from "../../store/store";


type TProps = {
  isLastLesson:boolean, isLastModule:boolean, completedResponse:any
}
const TestResultBtn:React.FC<TProps> = ({ isLastLesson, isLastModule, completedResponse }) => {
  const context = useContext(Context);

  const moduleList = useMemo(() => context.modules, [context.modules]);

  const [isAllLessonsChecked, setIsAllLessonsChecked] = useState(false);

  useEffect(() => {
    const getIsAllLessonsChecked = (() => {
      if (moduleList) {
        moduleList.items.map((i:any) =>
          setIsAllLessonsChecked(
            // @ts-ignore
            store.coursesAPI.lessons[context.courseId][i.id]
          )
        );
      }
    })();
  }, [context.courseId, moduleList]);

  const [lastStep, setLastStep] = useState<string | undefined>();
  useEffect(() => {
    isLastLesson && isLastModule && isAllLessonsChecked
      ? setLastStep("/test-completed")
      : setLastStep("/test-checking");
  }, [isLastLesson, isLastModule, isAllLessonsChecked]);

  return (
    <NavLink
      to={{
        pathname: lastStep,
        state: { completedResponse: completedResponse },
      }}
      className="test__ask-red test__ask-btn"
    >
      Смотреть результаты
    </NavLink>
  );
};

export default TestResultBtn;
