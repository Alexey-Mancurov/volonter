import { useContext } from "react";
import Context from "../../context/context";
import Preloader from "../common/Preloader";
import AboutCourse from "./AboutCourse";
import SidebarModuleBlock from "./SidebarModuleBlock/SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";

const CourseSidebar = (props) => {
  const context = useContext(Context);

  if (context) {
    let moduleList;

    if (context.modules) {
      moduleList = context.modules.items.map((i, index) => (
        <SidebarModuleBlock
          key={i.id}
          title={i.title}
          moduleId={i.id}
          moduleIndex={index}
          moduleMenuToggle={props.moduleMenuToggle}
          lessonMenuToggle={props.lessonMenuToggle}
        />
      ));
    }

    if (context.modules && props.progressCoursePercent && context.course) {
      return (
        <div className="test__wrapper-sidebar">
          <AboutCourse />

          <ProgressCourse progressCourse={props.progressCoursePercent} />

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
