import { useEffect } from "react";
import { useState } from "react";
import { coursesAPI } from "../../api/api";
import Preloader from "../common/Preloader";
import CoursesHeader from "../CoursesHeader/CoursesHeader";
import CoursesList from '../CoursesList/CoursesList'

const Courses = (props) => {
  let [courses, setCourses]=useState()
  useEffect(()=>{
    coursesAPI.courses().then(courses=>{
      setCourses(courses)
    })
  }, [])

  if(courses){
      return (
    <>
      <h1 class="title">Курсы</h1>
      <CoursesHeader />
      <CoursesList courses={courses.items} getCourseId={props.getCourseId}/>
    </>
  );
  } else{
    return <div><Preloader /></div>
  }

};

export default Courses;
