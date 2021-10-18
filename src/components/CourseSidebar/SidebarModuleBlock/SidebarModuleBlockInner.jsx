import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/check.svg";

const SidebarModuleBlockInner = (props) => {
  let lessonList;
  if (props.lessonsList.items) {
    lessonList = props.lessonsList.items.map((i, index) => (
      <ModuleTitle
        key={i.id}
        idLesson={i.id}
        lessonIndex={index}
        title={i.title}
        check={i.check}
        courseId={props.courseId}
        moduleId={props.moduleId}
        moduleIndex={props.moduleIndex}
        getModuleId={props.getModuleId}
        lessonId={props.lessonId}
        getLessonId={props.getLessonId}
        moduleMenuToggle={props.moduleMenuToggle}
        lessonMenuToggle={props.lessonMenuToggle}
      />
    ));
    return <div className="test__sidebar-block-inner">{lessonList}</div>;
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

const ModuleTitle = (props) => {
  let [lessonIndex, setLessonIndex] = useState()
  useEffect(()=>{
    setLessonIndex(lessonIndex=props.lessonIndex)
  }, [props.lessonIndex])

  let [moduleIndex, setModuleIndex] = useState()
  useEffect(()=>{
    setModuleIndex(moduleIndex=props.moduleIndex)
  }, [props.moduleIndex])

  return (
    <div className="test__sidebar-block-item">
      <NavLink
        to={{
          pathname: `/lesson`,
          state: {
            lessonIndex: props.lessonIndex,
            moduleIndex: props.moduleIndex,
          },
        }}
        className="test__sidebar-text"
        onClick={() => {props.moduleMenuToggle(moduleIndex); props.lessonMenuToggle(lessonIndex)}}
      >
        {props.title}
      </NavLink>
      <div
        className={`test__sidebar-block-check ${
          props.check ? "test__sidebar-block-check-completed" : ""
        }`}
      >
        <img src={check} alt="" />
      </div>
    </div>
  );
};

export default SidebarModuleBlockInner;
