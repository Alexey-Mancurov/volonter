import React, { useContext, useState } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../customHooks/useRequestData";
import store from "../../../store/store";
import actionToggle from "../../../utils/actionToggle/actionToggle";
import Preloader from "../../common/Preloader";
import Header from "./Header";
import List from "./List";
import s from "./index.module.css";

type TProps = {
  moduleId: number | string;
  title: string;
  moduleIndex: number;
};

const SidebarModuleBlock:React.FC<TProps> = ({ moduleId, title, moduleIndex }) => {
  const context = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    actionToggle(isOpen, setIsOpen)
  };

  const lessonsList = useRequestData(
    // @ts-ignore
    [store.coursesAPI.lessons[context.courseId][moduleId]],
    [context.courseId, moduleId]
  );

  if (lessonsList) {
    return (
      <div
        className={`${s.block} ${
          isOpen ? s.blockOpen : null
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
