import { useContext, useEffect, useState } from "react";
import { coursesAPI } from "../../../api/api";
import Context from "../../../context/context";
import Header from "./Header";
import List from "./List";

const SidebarModuleBlock = ({moduleId, title, moduleIndex, moduleMenuToggle, lessonMenuToggle}) => {

  const context = useContext(Context)

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [lessonsList, setLessonsList] = useState({});
  useEffect(() => {
    coursesAPI.lessons(context.courseId, moduleId).then((lessonsList) => {
      setLessonsList(lessonsList);
    });
  }, [context.courseId, moduleId]);

  return (
    <div
      className={`test__sidebar-block ${
        isOpen ? `test__sidebar-block-open` : null
      }`}
    >
      <Header
        title={title}
        toggleIsOpen={toggleIsOpen}
      />
      <List
        lessonsList={lessonsList}
        moduleIndex={moduleIndex}
        moduleMenuToggle={moduleMenuToggle}
        lessonMenuToggle={lessonMenuToggle}
      />
    </div>
  );
};

export default SidebarModuleBlock;
