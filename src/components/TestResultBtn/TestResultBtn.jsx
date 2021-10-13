import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { coursesAPI } from "../../api/api";
import { Context } from "../../context/context";

const TestResultBtn = (props) => {
  const {courseId}=useContext(Context)
  let [moduleList, setModuleList] = useState();
  useEffect(() => {
    coursesAPI.modules(courseId).then((moduleList) => {
      setModuleList(moduleList);
      console.log(moduleList)
    });
  }, []);
  let isAllLessonsChecked
  if (moduleList) {
    moduleList.items.map((i) =>
      coursesAPI.lessons(courseId, i.id).then((lessonsList) => {
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
