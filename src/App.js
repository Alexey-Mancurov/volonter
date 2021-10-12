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
    coursesAPI.lessonItem().then((lesson) => {
      setLessonItem(lesson);
    });
  }, [lesson]);

  // let list = lesson.map(i=>{
  //   debugger
  //   i.item.items.map(c=>{
  //     <div>{c.id}</div>
  //   })
  //   })


  let [course, setCourseItem] = useState({})
  let [courseId, setCourseId] = useState(29)
  
  useEffect(()=>{
    coursesAPI.courseItem(courseId).then((course)=>{
      setCourseItem(course)
    })
  }, [courseId])
  // [courseId, course.totalPoints, course.checkAsks, course.checkLessons, course]





  let [courses, setCourses]=useState([])
  useEffect(()=>{
    coursesAPI.courses().then(item=>{
      setCourses([...courses, {item}])
    })
  }, [])



  // let [currentLesson, setCurrentLeason] = useState(1);

  // const nextLesson = () => {
  //   setCurrentLeason(currentLesson+1);
  // };
  // const prevLesson = ()=>{
  //   setCurrentLeason(currentLesson-1);
  // }

  
  return (
    
    <div className="App" >
      {/* {course} */}
      <main className="main main_inner">
        <LessonTitle title={lesson.title} courses={courses}/>
        <div className='test__wrapper'>
          <CourseSidebar course={course}/>

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
