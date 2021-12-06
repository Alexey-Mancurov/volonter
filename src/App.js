import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CourseTitle from "./components/common/CourseTitle";
import Courses from "./components/Courses";
import { useLocation } from "react-router";
import Preloader from "./components/common/Preloader";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Context from "./context/context";
import store from "./store/store";
import TestContext from "./context/testContext";
import SuspensePreloader from "./components/common/SuspensePreloader";
import useIsLastItem from "./customHooks/useIsLastItem";
import { next, prev } from "./utils/toggleLessons";
const TestWrapper = React.lazy(() => import("./components/TestWrapper"));

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const exactPathRoute = "/";

  const [courseId, setCourseId] = useState();

  const [course, setCourseItem] = useState();

  const [modules, setModules] = useState();

  const getCourseId = (id) => {
    setCourseId(id);
    window.localStorage.setItem("courseId", id);
  };

  useEffect(() => {
    const getReservedCourseId = () => {
      setCourseId(JSON.parse(window.localStorage.getItem("courseId")));
    };
    !courseId && pathname !== exactPathRoute && getReservedCourseId();
  }, [courseId, pathname]);

  useEffect(() => {
    const getCurrentCourse = () => {
      setCourseItem(store.coursesAPI.courseItem[courseId]);
    };

    const getModulesList = () => {
      setModules(store.coursesAPI.modules[courseId]);
      setProgressCoursePercent();
    };

    if (courseId) {
      getCurrentCourse();
      getModulesList();
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

  const [lessonsList, setLessonsList] = useState();

  useEffect(() => {
    const getLessonsList = (() => {
      modules &&
        idCurrentModule &&
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
          setLessonsList(store.coursesAPI.lessons[courseId][idCurrentModule]);
        }
      }
    })();
  }, [courseId, idCurrentModule, lessonsList, currentLessonIndex]);

  const [progressCoursePercent, setProgressCoursePercent] = useState(0);

  useEffect(() => {
    if (course) {
      const getProgressCoursePercent = (() => {
        const progressPercent = Math.round(
          (course.course.checkAsks / course.course.totalAsks) * 100
        );
        setProgressCoursePercent(progressPercent);
      })();
    }
  }, [course]);

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

  const moduleMenuToggle = (index) => {
    setCurrentModuleIndex(index);
  };

  const lessonMenuToggle = (index) => {
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
    progressCoursePercent,
    nextLesson,
    prevLesson,
    isLastLesson,
    isLastModule,
  };

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <main className="main main_inner">
          {!course && pathname !== exactPathRoute && <Preloader />}
          {course && pathname !== exactPathRoute ? (
            <>
              <CourseTitle title={course.course.title} />
              {pathname === "/courseDetail" ? (
                <Route path={"/courseDetail"} children={<CourseDetail />} />
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
  );
}

export default App;
