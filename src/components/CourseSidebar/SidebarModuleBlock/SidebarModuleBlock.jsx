import React, { useContext, useEffect, useState } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../customHooks/useRequestData";
import store from "../../../store/store";
import Preloader from "../../common/Preloader";
import Header from "./Header";
import List from "./List";

const SidebarModuleBlock = ({ moduleId, title, moduleIndex }) => {
  const context = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const lessonsList = useRequestData(
    [store.coursesAPI.lessons[context.courseId][moduleId]],
    [context.courseId, moduleId]
  );

  if (lessonsList) {
    return (
      <div
        className={`test__sidebar-block ${
          isOpen ? `test__sidebar-block-open` : null
        }`}
      >
        <Header title={title} toggleIsOpen={toggleIsOpen} />
        <List lessonsList={lessonsList} moduleIndex={moduleIndex} />
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default SidebarModuleBlock;
