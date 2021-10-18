import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { coursesAPI } from "../../api/api";

const TestResultBtn = (props) => {

  let [moduleList, setModuleList] = useState();
  useEffect(() => {
    coursesAPI.modules(props.courseId).then((moduleList) => {
      setModuleList(moduleList);
    });
  }, []);

  // Проверка, выполнены ли все уроки
  let isAllLessonsChecked
  if (moduleList) {
    moduleList.items.map((i) =>
      coursesAPI.lessons(props.courseId, i.id).then((lessonsList) => {
        isAllLessonsChecked = lessonsList.items.every((i)=>i.check===true)
      })
    );
  }

  if (props.isLastLesson && props.isLastModule && isAllLessonsChecked) {
    return (
      <NavLink
        to={{
          pathname: "/test-completed",
          state: { completedResponse: props.completedResponse },
        }}
        className="test__ask-red test__ask-btn"
      >
        Смотреть результаты
      </NavLink>
    );
  } else {
    return (
      <NavLink
        to={{
          pathname: "/test-checking",
          state: { completedResponse: props.completedResponse },
        }}
        className="test__ask-red test__ask-btn"
      >
        Смотреть результаты
      </NavLink>
    );
  }
};

export default TestResultBtn;
