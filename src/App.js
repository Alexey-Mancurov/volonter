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
import { Context } from "./context/context";

function App() {


  let [course, setCourseItem] = useState()
  let [courseId, setCourseId] = useState(29)
  
  useEffect(()=>{
    coursesAPI.courseItem(courseId).then((course)=>{
      setCourseItem(course)
    })
  }, [courseId])

  let [courses, setCourses]=useState([])
  useEffect(()=>{
    coursesAPI.courses().then(item=>{
      setCourses([...courses, {item}])
    })
  }, [])

  if(course){
      return (
        <Context.Provider value={{
            courseId
          }}>
          <div className="App" >
            <main className="main main_inner">
              <LessonTitle title={course.course.title}/>
              <div className='test__wrapper'>
                <CourseSidebar course={course} courseId={courseId}/>

                <div className="test__wrapper-body">
                  <Route exact path={'/lesson'}>
                    <CourseInfo
                      courseId={courseId}
                    />
                  </Route>
                  <Route path={'/test'}>
                    <TestContainer />
                  </Route>
                  <Route path={'/test-completed'}>
                    <TestCompleted title={course.course.title}/>
                  </Route>
                  <Route path={'/test-checking'}>
                    <TestChecking />
                  </Route>
                  {/* тут слайдер */}
                </div>
              </div>
            </main>
          </div>
        </Context.Provider>
    );
  } else{
    return <div>Подождите, загрузка</div>
  }
}

export default App;
