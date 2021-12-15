import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
// import "./App.css";
import CourseTitle from "./components/common/CourseTitle/CourseTitle";
import Courses from "./components/Courses";
import { useLocation } from "react-router";
import { useRouteMatch } from "react-router-dom";
import Preloader from "./components/common/Preloader";
import CourseDetail from "./components/CourseDetail";
import Context from "./context/context";
import store from "./store/store";
import TestContext from "./context/testContext";
import SuspensePreloader from "./components/common/SuspensePreloader";
import useIsLastItem from "./customHooks/useIsLastItem";
import { next, prev } from "./utils/toggleLessons/toggleLessons";
import useProgressPercent from "./customHooks/useProgressPercent";
const TestWrapper = React.lazy(() => import("./components/TestWrapper/TestWrapper"));

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const match = useRouteMatch("/courseDetail/:id");

  const exactPathRoute = "/";

  const [courseId, setCourseId] = useState<number | undefined>();

  const [course, setCourseItem] = useState<any>();

  const [modules, setModules] = useState<any>();

  const getCourseId = (id: number) => {
    setCourseId(id);
    // @ts-ignore
    window.localStorage.setItem("courseId", id);
  };

  useEffect(() => {
    const getReservedCourseId = () => {
      // @ts-ignore
      setCourseId(JSON.parse(window.localStorage.getItem("courseId")));
    };
    !courseId && pathname !== exactPathRoute && getReservedCourseId();
  }, [courseId, pathname]);

  useEffect(() => {
    const getCurrentCourse = () => {
      // @ts-ignore
      setCourseItem(store.coursesAPI.courseItem[courseId]);
    };

    const getModulesList = () => {
      // @ts-ignore
      setModules(store.coursesAPI.modules[courseId]);
      setProgressCoursePercent();
    };

    if (courseId) {
      getCurrentCourse();
      getModulesList();
      // @ts-ignore
      window.localStorage.setItem("courseId", courseId);
    }
  }, [courseId]);

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  const [idCurrentModule, setIdCurrentModule] = useState();

  useEffect(() => {
    const getIdCurrentModule = (() => {
      modules && setIdCurrentModule(modules.items[currentModuleIndex].id);
    })();
  }, [modules, currentModuleIndex]);

  const [lessonsList, setLessonsList] = useState<any>();

  useEffect(() => {
    const getLessonsList = (() => {
      // @ts-ignore
      modules &&
        idCurrentModule && // @ts-ignore
        setLessonsList(store.coursesAPI.lessons[courseId][idCurrentModule]);
    })();
  }, [courseId, modules, idCurrentModule]);

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const [idCurrentLesson, setIdCurrentLesson] = useState();

  useEffect(() => {
    const getIdCurrentLesson = (() => {
      if (lessonsList) {
        try {
          setIdCurrentLesson(lessonsList.items[currentLessonIndex].id);
        } catch {
          // @ts-ignore
          setLessonsList(store.coursesAPI.lessons[courseId][idCurrentModule]);
        }
      }
    })();
  }, [courseId, idCurrentModule, lessonsList, currentLessonIndex]);

  const [progressCoursePercent, setProgressCoursePercent] = useProgressPercent(
    course?.course.checkAsks,
    course?.course.totalAsks,
    "progressCoursePercent",
    "setProgressCoursePercent"
  );

  const isLastModule = useIsLastItem(modules, currentModuleIndex);

  const isLastLesson = useIsLastItem(lessonsList, currentLessonIndex);

  const nextLesson = () => {
    next(
      lessonsList,
      modules,
      currentLessonIndex,
      currentModuleIndex,
      setCurrentLessonIndex,
      setCurrentModuleIndex
    );
  };

  const prevLesson = () => {
    prev(
      currentLessonIndex,
      currentModuleIndex,
      setCurrentLessonIndex,
      setCurrentModuleIndex
    );
  };

  const moduleMenuToggle = (index: number) => {
    setCurrentModuleIndex(index);
  };

  const lessonMenuToggle = (index: number) => {
    setCurrentLessonIndex(index);
  };

  const contextValue = {
    course,
    courseId,
    modules,
    getCourseId,
  };

  const testContextValue = {
    currentModuleIndex,
    currentLessonIndex,
    moduleMenuToggle,
    lessonMenuToggle,
    idCurrentLesson,
    idCurrentModule,
    progressCoursePercent: progressCoursePercent,
    nextLesson,
    prevLesson,
    isLastLesson,
    isLastModule,
  };

  return (
    <>
      <Context.Provider value={contextValue}>
        <div className="App">
          <main className="main main_inner">
            {!course && pathname !== exactPathRoute && <Preloader />}
            {course && pathname !== exactPathRoute ? (
              <>
                <CourseTitle title={course.course.title} />
                {/* @ts-ignore */}
                {pathname === `/courseDetail/${match?.params.id}` ? (
                  <Route
                    path={"/courseDetail/:id"}
                    children={<CourseDetail />}
                  />
                ) : (
                  <TestContext.Provider value={testContextValue}>
                    <SuspensePreloader
                      child={<TestWrapper title={course.course.title} />}
                    />
                  </TestContext.Provider>
                )}
              </>
            ) : (
              <Route exact path={exactPathRoute} children={<Courses />} />
            )}
          </main>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
