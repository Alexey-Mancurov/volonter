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

function App() {

  let [lesson, setLessonItem] = useState({});

  useEffect(() => {
    coursesAPI.lessonItem().then((response) => {
      setLessonItem(lesson = response);
    });
  }, []);

  let [course, setCourseItem] = useState({})

  useEffect(()=>{
    coursesAPI.courseItem().then((response)=>{
      setCourseItem(course = response)
    })
  }, [course.totalPoints, course.checkAsks, course.checkLessons])

  // let [currentLesson, setCurrentLeason] = useState(1);

  // const nextLesson = () => {
  //   setCurrentLeason(currentLesson+1);
  // };
  // const prevLesson = ()=>{
  //   setCurrentLeason(currentLesson-1);
  // }

  
  return (
    
    <div className="App" >
      <main className="main main_inner">
        <LessonTitle title={lesson.title}/>
        <div className='test__wrapper'>

          <CourseSidebar {...course}/>

          <div className="test__wrapper-body">
            <Route exact path={'/'}>
              <CourseInfo
                linkVideo={lesson.linkVideo}
                description={lesson.description}
                info={lesson.info}
                // currentLesson={currentLesson}
                // nextLesson={nextLesson}
                // prevLesson={prevLesson}
              />
            </Route>
            <Route path={'/test'}>
              <TestContainer />
            </Route>
            <Route path={'/test-completed'}>
              <TestCompleted />
            </Route>
            <Route path={'/test-checking'}>
              <TestChecking />
            </Route>
            {/* тут слайдер */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
