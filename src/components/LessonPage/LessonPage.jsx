import { useState } from "react";
import { useEffect } from "react";
import { Route, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { coursesAPI } from "../../api/api";
import { Context } from "../../context/context";
import CourseInfo from "../CourseInfo/CourseInfo";
import CourseSidebar from "../CourseSidebar/CourseSidebar";
import LessonTitle from "../LessonTitle/LessonTitle";
import TestChecking from "../TestChecking/TestChecking";
import TestCompleted from "../TestCompleted/TestCompleted";
import TestContainer from "../TestContainer/TestContainer";

const LessonPage = (props) => {
  // Получаю данные текущего курса
  let [course, setCourseItem] = useState();
  useEffect(() => {
    coursesAPI.courseItem(props.courseId).then((course) => {
      setCourseItem(course);
      console.log(course);
    });
  }, []);

  // Получаю список модулей
  let [modules, setModules] = useState();
  useEffect(() => {
    coursesAPI.modules(props.courseId).then((modules) => {
      setModules(modules);
      console.log(modules);
    });
    setProgressCoursePercent();
  }, []);

  // Получаю Модуль по индексу
  let [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  // Получаю id Модуля по индексу
  let [idCurrentModule, setIdCurrentModule] = useState();

  // Добавляю id Модуля в state
  useEffect(() => {
    if (modules) {
      setIdCurrentModule(
        (idCurrentModule = modules.items[currentModuleIndex].id)
      );
    }
  }, [modules, currentModuleIndex]);

  // получаю список Уроков
  let [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    if (modules && idCurrentModule) {
      coursesAPI
        .lessons(props.courseId, idCurrentModule)
        .then((lessonsList) => {
          setLessonsList(lessonsList);
        });
    }
  }, [modules, idCurrentModule]);

  // Получаю Урок по индексу
  let [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Получаю id Урока по индексу
  let [idCurrentLesson, setIdCurrentLesson] = useState();

  // Добавляю id Урока в state
  useEffect(() => {
    if (lessonsList) {
      setIdCurrentLesson(
        (idCurrentLesson = lessonsList.items[currentLessonIndex].id)
      );
    }
  }, [lessonsList, currentLessonIndex]);

  // Изменяю индекс Урока по клику на Следующий урок
  const nextLesson = () => {
    if (lessonsList.items.length !== currentLessonIndex + 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      if (modules.items.length !== currentModuleIndex + 1) {
        setCurrentModuleIndex(currentModuleIndex + 1);
        setCurrentLessonIndex((currentLessonIndex = 0));
      } else {
        alert("Это последний урок");
      }
    }
  };

  // Последний модуль в курсе?
  let [isLastModule, setIsLastModule] = useState(false);
  useEffect(() => {
    if (
      modules &&
      currentModuleIndex &&
      modules.items.length === currentModuleIndex + 1
    ) {
      setIsLastModule((isLastModule = true));
    } else {
      setIsLastModule((isLastModule = false));
    }
  }, [currentModuleIndex, modules]);

  // Последний урок в курсе?
  let [isLastLesson, setIsLastLesson] = useState(false);
  useEffect(() => {
    if (
      lessonsList &&
      currentLessonIndex &&
      lessonsList.items.length === currentLessonIndex + 1
    ) {
      setIsLastLesson((isLastLesson = true));
    } else {
      setIsLastLesson((isLastLesson = false));
    }
  }, [currentLessonIndex, lessonsList]);

  // Изменяю индекс Урока по клику на Предыдущий урок
  const prevLesson = () => {
    if (currentLessonIndex === 0 && currentModuleIndex === 0) {
      setCurrentLessonIndex((currentLessonIndex = 0));
      setCurrentLessonIndex((currentModuleIndex = 0));
      alert("Это самый первый урок");
    } else if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentLessonIndex === 0 && currentModuleIndex !== 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(
        (currentLessonIndex = lessonsList.items.length - 1)
      );
    }
  };

  // Высчитываю прогресс по курсу в %
  let [progressCoursePercent, setProgressCoursePercent] = useState();

  useEffect(() => {
    if (course) {
      let calculateProgress = Math.round(
        (course.course.checkAsks / course.course.totalAsks) * 100
      );
      setProgressCoursePercent((progressCoursePercent = calculateProgress));
    }
  }, [course]);

  if (course) {
    return (
      <>
          <Context.Provider
            value={{
              idCurrentModule,
              idCurrentLesson,
            }}
          >
            <LessonTitle title={course.course.title} />
            <div className="test__wrapper">
              <CourseSidebar
                course={course}
                courseId={props.courseId}
                modules={modules}
                progressCoursePercent={progressCoursePercent}
                getModuleId={props.getModuleId}
                lessonId={props.lessonId}
                getLessonId={props.getLessonId}
              />

              <div className="test__wrapper-body">
                <Route path={"/lesson/:moduleIndex/:lessonIndex"}>
                  <CourseInfo
                    courseId={props.courseId}
                    nextLesson={nextLesson}
                    prevLesson={prevLesson}
                    isLastLesson={isLastLesson}
                    isLastModule={isLastModule}
                    idCurrentLesson={idCurrentLesson}
                    idCurrentModule={idCurrentModule}
                  />
                </Route>
                <Route path={"/lesson/test"}>
                  <TestContainer />
                </Route>
                <Route path={"/test-completed"}>
                  <TestCompleted title={course.course.title} />
                </Route>
                <Route path={"/test-checking"}>
                  <TestChecking />
                </Route>
                {/* тут слайдер */}
              </div>
            </div>
          </Context.Provider>
      </>
    );
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default LessonPage;
