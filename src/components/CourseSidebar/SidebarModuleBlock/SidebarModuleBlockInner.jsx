import { useState } from "react";
import { NavLink } from "react-router-dom";
import check from "../../../assets/check.svg";

const SidebarModuleBlockInner = (props) => {
  let lessonList
  if (props.lessonsList.items) {
    lessonList = props.lessonsList.items.map((i) => (
      <ModuleTitle key={i.id} title={i.title} check={i.check} courseId={props.courseId} moduleId={props.moduleId} />
    ));
    return <div className="test__sidebar-block-inner">{lessonList}</div>;
  } else{
    return <div>Подождите, идет загрузка</div>
  }
};

const ModuleTitle = (props) => {
  const [isCompleted, setCompleted] = useState(false);

  const checkCompleted = () => {
    setCompleted(true);
  };

  return (
    <div className="test__sidebar-block-item">
      <NavLink
        to={`/courses/${props.courseId}/modules/${props.moduleId}/lessons/1`}
        className="test__sidebar-text"
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
