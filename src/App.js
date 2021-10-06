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
  const [courses, setCourses]= useState({
    leasonList:[
      {title: 'Курс 1', id: 1},
      {title: 'Курс 2', id: 2},
      {title: 'Курс 3', id: 3},
      {title: 'Курс 4', id: 4},
    ],
    // dev block
    leason:{title: 'Урок 4', id: 4}
  })

  const [textCourse, setNextCourse]= useState('Курс 5')

  const getNextCourse=()=>{
    setCourses(courses.leason.title === 'Урок 5' )
  }



  let [lesson, setCourseInfoData] = useState({});

  useEffect(() => {
    coursesAPI.lessonItem().then((response) => {
      setCourseInfoData((lesson = response));
    });
  }, []);

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

          <CourseSidebar />

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
