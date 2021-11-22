import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import LessonTitle from "./components/LessonTitle/LessonTitle";
import TestCompleted from "./components/TestCompleted/TestCompleted";
import TestContainer from "./components/TestContainer/TestContainer";
import CourseSidebar from "./components/CourseSidebar/CourseSidebar";
import TestChecking from "./components/TestChecking/TestChecking";
import { coursesAPI } from "./api/api";
import Courses from "./components/Courses/Courses";
import { useLocation } from "react-router";
import Preloader from "./components/common/Preloader";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Context from "./context/context";

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
      coursesAPI.courseItem(courseId).then((course) => {
        setCourseItem(course);
      });
    };
    const getModulesList = () => {
      coursesAPI.modules(courseId).then((modules) => {
        setModules(modules);
      });
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
        coursesAPI.lessons(courseId, idCurrentModule).then((lessonsList) => {
          setLessonsList(lessonsList);
        });
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
          coursesAPI.lessons(courseId, idCurrentModule).then((lessonsList) => {
            setLessonsList(lessonsList);
          });
        }
      }
    })();
  }, [courseId, idCurrentModule, lessonsList, currentLessonIndex]);

  const [isLastModule, setIsLastModule] = useState(false);

  const [isLastLesson, setIsLastLesson] = useState(false);
  
  useEffect(() => {
    const getIsLastModule = (() => {
      modules &&
      currentModuleIndex &&
      modules.items.length === currentModuleIndex + 1
        ? setIsLastModule(true)
        : setIsLastModule(false);
    })();
  }, [currentModuleIndex, modules]);

  useEffect(() => {
    const getLastLesson = (() => {
      lessonsList &&
      currentLessonIndex &&
      lessonsList.items.length === currentLessonIndex + 1
        ? setIsLastLesson(true)
        : setIsLastLesson(false);
    })();
  }, [currentLessonIndex, lessonsList]);

  const [progressCoursePercent, setProgressCoursePercent] = useState(0);

  useEffect(() => {
    if (course) {
      const getProgressCoursePercent = (() => {
        const progressPercent = Math.round(
          (course.course.checkAsks / course.course.totalAsks) * 100
        );
        course && setProgressCoursePercent(progressPercent);
      })();
    }
  }, [course]);

  const nextLesson = () => {
    if (lessonsList.items.length !== currentLessonIndex + 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    } else {
      if (modules.items.length !== currentModuleIndex + 1) {
        setCurrentModuleIndex(currentModuleIndex + 1);
        setCurrentLessonIndex(0);
      } else {
        alert("Это последний урок");
      }
    }
  };

  const prevLesson = () => {
    if (currentLessonIndex === 0 && currentModuleIndex === 0) {
      setCurrentLessonIndex(0);
      setCurrentModuleIndex(0);
      alert("Это самый первый урок");
    } else if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    } else if (currentLessonIndex === 0 && currentModuleIndex !== 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentLessonIndex(0);
    }
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

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <main className="main main_inner">
          {!course && pathname !== exactPathRoute && <Preloader />}
          {course && pathname !== exactPathRoute ? (
            <>
              <LessonTitle title={course.course.title} />
              {pathname === "/courseDetail" ? (
                <Route path={"/courseDetail"}>
                  <CourseDetail />
                </Route>
              ) : (
                <div className="test__wrapper">
                  <CourseSidebar
                    progressCoursePercent={progressCoursePercent}
                    lessonId={idCurrentLesson}
                    moduleMenuToggle={moduleMenuToggle}
                    lessonMenuToggle={lessonMenuToggle}
                  />
                  <div className="test__wrapper-body">
                    <Route path={"/lesson"}>
                      <CourseInfo
                        nextLesson={nextLesson}
                        prevLesson={prevLesson}
                        isLastLesson={isLastLesson}
                        isLastModule={isLastModule}
                        idCurrentLesson={idCurrentLesson}
                        idCurrentModule={idCurrentModule}
                      />
                    </Route>
                    <Route path={"/test"}>
                      <TestContainer />
                    </Route>
                    <Route path={"/test-completed"}>
                      <TestCompleted title={course.course.title} />
                    </Route>
                    <Route path={"/test-checking"}>
                      <TestChecking nextLesson={nextLesson} />
                    </Route>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Route exact path={exactPathRoute}>
              <Courses />
            </Route>
          )}
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;