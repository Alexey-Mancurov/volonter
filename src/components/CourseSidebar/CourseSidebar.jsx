import { useEffect, useState } from "react";
import { coursesAPI } from "../../api/api";
import SidebarDataAboutTestDesctop from "./SidebarDataAboutTestDesctop";
import SidebarModuleBlock from "./SidebarModuleBlock/SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";

const CourseSidebar = (props) => {

  let [modules, setModules] = useState({});
  useEffect(() => {
    coursesAPI.modules(props.courseId).then((modules) => {
      setModules(modules);
    });
    setProgressCoursePercent();
  }, []);

  let [progressCoursePercent, setProgressCoursePercent] = useState();

  useEffect(() => {
    if (props.course) {
      let calculateProgress =
        Math.round((props.course.course.checkAsks / props.course.course.totalAsks) * 100);
      setProgressCoursePercent(progressCoursePercent=calculateProgress);
    }
  }, [props.course]);

  let moduleList;
  if (modules.items) {
    moduleList = modules.items.map((i) => (
      <SidebarModuleBlock
        key={i.id}
        title={i.title}
        courseId={props.courseId}
        moduleId={i.id}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  return (
    <div className="test__wrapper-sidebar">
      {/* {list} */}
      <SidebarDataAboutTestDesctop course={props.course} />

      <ProgressCourse
        progressCourse={progressCoursePercent}
        // totalLessons={props.course.totalLessons}
        // checkLessons={props.course.checkLessons}
      />
      {/* {modulesList} */}
      {moduleList}
    </div>
  );
};

export default CourseSidebar;
