import { useEffect } from "react";
import Preloader from "../common/Preloader";
import SidebarDataAboutTestDesctop from "./SidebarDataAboutTestDesctop";
import SidebarModuleBlock from "./SidebarModuleBlock/SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";

const CourseSidebar = (props) => {
  useEffect(() => {
    if (!props.courseId) {
      props.setReservedCourseId(
        JSON.parse(window.localStorage.getItem("courseId"))
      );
    }
  }, []);

  let moduleList;
  if (props.modules) {
    moduleList = props.modules.items.map((i, index) => (
      <SidebarModuleBlock
        key={i.id}
        title={i.title}
        courseId={props.courseId}
        moduleId={i.id}
        moduleIndex={index}
        getModuleId={props.getModuleId}
        lessonId={props.lessonId}
        getLessonId={props.getLessonId}
        moduleMenuToggle={props.moduleMenuToggle}
        lessonMenuToggle={props.lessonMenuToggle}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  if (props.modules && props.progressCoursePercent && props.course) {
    return (
      <div className="test__wrapper-sidebar">
        <SidebarDataAboutTestDesctop course={props.course} />

        <ProgressCourse progressCourse={props.progressCoursePercent} />

        {moduleList}
      </div>
    );
  } else{
    return <Preloader />
  }
};

export default CourseSidebar;
