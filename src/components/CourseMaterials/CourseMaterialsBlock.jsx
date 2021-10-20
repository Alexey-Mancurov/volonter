import { useEffect, useState } from "react";
import { coursesAPI } from "../../api/api";
import CourseMaterialsItem from "./CourseMaterialsItem";

const CourseMaterialsBlock =(props)=>{

    let [lessonsList, setLessonsList] = useState();
    useEffect(() => {
      coursesAPI.lessons(props.courseId, props.moduleId).then((lessonsList) => {
        setLessonsList(lessonsList);
      });
    }, []);

    
  let list;
  if (lessonsList) {

    list = lessonsList.items.map((i) => (
      <CourseMaterialsItem key={i.id} title={i.title} materials={i.materials }/>
    ));
  }

    return <>
    <p class="cource__title-2">{props.title}</p>
    
    {list}
    </>
}

export default CourseMaterialsBlock