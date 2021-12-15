import { useContext } from "react";
import Context from "../../context/context";
import { TContext } from "../../types/types";
import Preloader from "../common/Preloader";
import AboutCourse from "./AboutCourse";
import SidebarModuleBlock from "./SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";
import s from "./index.module.css";


const CourseSidebar = () => {
  const context:TContext = useContext(Context);

  if (context) {
    let moduleList;

    if (context.modules) {
      // @ts-ignore
      moduleList = context.modules.items.map((i, index) => (
        <SidebarModuleBlock
          key={i.id}
          title={i.title}
          moduleId={i.id}
          moduleIndex={index}
        />
      ));
    }

    if (context.modules && context.course) {
      return (
        <div className={s.sidebar}>
          <AboutCourse />
          <ProgressCourse />
          {moduleList}
        </div>
      );
    } else {
      return <Preloader />;
    }
  } else {
    return <Preloader />;
  }
};

export default CourseSidebar;
