import { useEffect, useState } from "react";
import {  Route, browserHistory } from "react-router-dom";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import LessonTitle from "./components/LessonTitle/LessonTitle";
import TestCompleted from "./components/TestCompleted/TestCompleted";
import TestContainer from "./components/TestContainer/TestContainer";
import CourseSidebar from "./components/CourseSidebar/CourseSidebar";
import TestChecking from "./components/TestChecking/TestChecking";
import { coursesAPI } from "./api/api";
import { Context } from "./context/context";
import Courses from "./components/Courses/Courses";
import LessonPage from "./components/LessonPage/LessonPage";
import Preloader from "./components/common/Preloader";
import {createBrowserHistory } from 'history'
import qs from 'qs'
import { useLocation } from "react-router";


function App() {

  let location = useLocation()

  let [reservedCourseId, setReservedCourseId] = useState()


  // Получаю id курса
  let [courseId, setCourseId]=useState()

  const getCourseId = (id) =>{
    setCourseId(courseId=id)
  }

  const helpRender = (id)=>{
    setCourseId(courseId=id)
  }

  
    // Получаю данные текущего курса
    let [course, setCourseItem] = useState();
    useEffect(() => {
      if(courseId){
              coursesAPI.courseItem(courseId).then((course) => {
        setCourseItem(course);
        console.log(course);
      });
      }
    }, [courseId]);
    // Получаю список модулей
  let [modules, setModules] = useState();
  useEffect(() => {
    if(courseId){
          coursesAPI.modules(courseId).then((modules) => {
      setModules(modules);
      console.log(modules);
      });
      setProgressCoursePercent();
    }

  }, [courseId]);
    // Получаю Модуль по индексу
    let [currentModuleIndex, setCurrentModuleIndex] = useState(0);

    // Получаю id Модуля по индексу
    let [idCurrentModule, setIdCurrentModule] = useState();
  
    // Добавляю id Модуля в state
    useEffect(() => {
      debugger
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
          .lessons(courseId, idCurrentModule)
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
        setCurrentModuleIndex((currentModuleIndex = 0));
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

    // Изменяю Индекс модуля по клику на меню 
    const moduleMenuToggle = (index)=>{
      setCurrentModuleIndex(currentModuleIndex=index)
    }

    // Изменяю Индекс урока по клику на меню
    const lessonMenuToggle = (index)=>{
      setCurrentLessonIndex(currentLessonIndex=index)
    }
  
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

    // Сохраняю данные в url, чтобы при перезагрузке не слетало
    // const history = createBrowserHistory()

    // useEffect(() => {
    //   const filterParams = history.location.search.substr(1);
    //   const filtersFromParams = qs.parse(filterParams);
    //   if (filtersFromParams.courseId) {
    //     setCourseId(Number(filtersFromParams.courseId));
    //   }
    //   // if (filtersFromParams.idCurrentModule) {
    //   //   setCourseId(Number(filtersFromParams.idCurrentModule));
    //   // }
    //   // if (filtersFromParams.idCurrentLesson) {
    //   //   setCourseId(Number(filtersFromParams.idCurrentLesson));
    //   // }
    // }, []);
  
    // useEffect(() => {
    //   if(courseId){
    //     history.push(`?courseId=${courseId}`);
    //     // history.push(`?courseId=${courseId}?idCurrentModule=${idCurrentModule}?idCurrentLesson=${idCurrentLesson}`);
    //   }
    // }, [courseId]);


    useEffect(() => {
        if(!courseId && location.pathname !== '/courses'){
          setCourseId(JSON.parse(window.localStorage.getItem('courseId')));
        }
    }, []);

    useEffect(()=>{
      if(courseId){
        window.localStorage.setItem('courseId', courseId)
      }
    },[courseId])
  


    if(!courseId && location.pathname !== '/courses'){
      <div className="test__wrapper">
        <CourseSidebar reservedCourseId={reservedCourseId}
                setReservedCourseId={setReservedCourseId} helpRender={helpRender}/>
      </div>
    }
    return (
        <div className="App" >
          <main className="main main_inner">
            {course 
            ? <>
            <LessonTitle title={course.course.title} />
            <div className="test__wrapper">
            <CourseSidebar
                course={course}
                courseId={courseId}
                modules={modules}
                progressCoursePercent={progressCoursePercent}
                lessonId={idCurrentLesson}
                moduleMenuToggle={moduleMenuToggle}
                lessonMenuToggle={lessonMenuToggle}
                setCourseId={setCourseId}
                reservedCourseId={reservedCourseId}
                setReservedCourseId={setReservedCourseId}
              />
            <div className="test__wrapper-body">
            <Route path={'/lesson'}>
              <CourseInfo
                    courseId={courseId}
                    nextLesson={nextLesson}
                    prevLesson={prevLesson}
                    isLastLesson={isLastLesson}
                    isLastModule={isLastModule}
                    idCurrentLesson={idCurrentLesson}
                    idCurrentModule={idCurrentModule}
                  />
            </Route>
            
              <Route path={'/test'}>
              <TestContainer courseId={courseId}/>
                </Route>
              <Route path={'/test-completed'}>
                <TestCompleted title={course.course.title} courseId={courseId}/>
              </Route>
              <Route path={'/test-checking'}>
                <TestChecking nextLesson={nextLesson}/>
              </Route>
            </div>
            </div>
            </>
            : <Route exact path={'/courses'} component={Courses}>
              <Courses getCourseId={getCourseId}/>
            </Route>
          }
            
            
          </main>
        </div>
  );



}

export default App;
