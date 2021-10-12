import { useEffect, useState } from "react";
import { coursesAPI } from "../../api/api";
import SidebarDataAboutTestDesctop from "./SidebarDataAboutTestDesctop";
import SidebarModuleBlock from "./SidebarModuleBlock/SidebarModuleBlock";
import ProgressCourse from "./SidebarProgressCourse";

const CourseSidebar = (props) => {
  let state = {
    generalDataAboutTest: [
      // Изменить type num на Number. Надо будет разделить на 2 компонента
      { id: 1, num: "14", title: "Общее количество баллов" },
      { id: 2, num: "1/4", title: "Количество вопросов" },
    ],
    progressCoursePercent: 50,
    moduleBlockData: [
      {
        id: 1,
        title: "Введение",
        moduleList: [
          { id: 1, moduleTitle: "Первые шаги в волонтерства" },
          { id: 2, moduleTitle: "Пять страхов волонтерства" },
          { id: 3, moduleTitle: "Пять советов начинающему волонтеру" },
        ],
      },
      {
        id: 2,
        title: "Модуль 1",
        moduleList: [
          { id: 1, moduleTitle: "Первые шаги в волонтерства" },
          { id: 2, moduleTitle: "Вторые шаги в волонтерства" },
        ],
      },
      {
        id: 3,
        title: "Модуль 2",
        moduleList: [
          { id: 1, moduleTitle: "Первые шаги в волонтерства" },
          { id: 2, moduleTitle: "Вторые шаги в волонтерства" },
        ],
      },
      {
        id: 4,
        title: "Модуль 3",
        moduleList: [
          { id: 1, moduleTitle: "Первые шаги в волонтерства" },
          { id: 2, moduleTitle: "Вторые шаги в волонтерства" },
        ],
      },
    ],
  };

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
