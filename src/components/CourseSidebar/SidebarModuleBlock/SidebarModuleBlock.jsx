import { useEffect, useState } from "react";
import { coursesAPI } from "../../../api/api";
import SidebarModuleBlockHeader from "./SidebarModuleBlockHeader";
import SidebarModuleBlockInner from "./SidebarModuleBlockInner";

const SidebarModuleBlock = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  let [lessonsList, setLessonsList] = useState({});
  useEffect(() => {
    coursesAPI.lessons(props.courseId, props.moduleId).then((lessonsList) => {
      setLessonsList(lessonsList);
    });
  }, []);

  return (
    <div
      className={`test__sidebar-block ${
        isOpen ? `test__sidebar-block-open` : null
      }`}
    >
      <SidebarModuleBlockHeader
        title={props.title}
        toggleIsOpen={toggleIsOpen}
      />
      <SidebarModuleBlockInner lessonsList={lessonsList} courseId={props.courseId} moduleId={props.moduleId}/>
    </div>
  );
};

export default SidebarModuleBlock;
