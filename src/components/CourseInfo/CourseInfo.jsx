import { useEffect } from "react";
import {coursesAPI} from "../../api/api";
import {usersAPI} from "../../api/api-test";
import CourceInfoContent from "./CourceInfoContent";
import CourseInfoActions from "./CourseInfoActions";
import CourseInfoVideo from "./CourseInfoVideo";

const CourseInfo = (props) => {
  useEffect(()=>{
    console.log(coursesAPI.courseItem)
    console.log(usersAPI.getUsers)
    // coursesAPI.courseItem.then(response=>{
    //   return
    // })
  },[])
  return (
    <>
      <div class="test__info">
        <CourseInfoVideo />
        <CourceInfoContent />
        {/* Тут еще слайдер добавить */}
      </div>
      <CourseInfoActions
        currentLesson={props.currentLesson}
        nextLesson={props.nextLesson}
        prevLesson={props.prevLesson}
        getActiveTest={props.getActiveTest}
      />
    </>
  );
};

export default CourseInfo;
