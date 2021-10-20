import { useEffect, useState } from "react";
import { coursesAPI } from "../../api/api";
import CourseInsideItem from "./CourseInsideItem";

const CourseInsideBlock = (props) => {
  let [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    coursesAPI.lessons(props.courseId, props.moduleId).then((lessonsList) => {
      setLessonsList(lessonsList);
    });
  }, []);

  let list;
  if (lessonsList) {
    list = lessonsList.items.map((i) => (
      <CourseInsideItem key={i.id} title={i.title}/>
    ));
  }
  return (
    <>
      <p class="cource__title-2">{props.title}</p>
      
      {list}
       

    </>
  );
};

export default CourseInsideBlock;
