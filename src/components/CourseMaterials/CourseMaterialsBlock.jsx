import { useContext, useEffect, useState } from "react";
import Context from "../../context/context";
import store from "../../store/store";
import CourceTitle2 from "../common/CourceTitle2";
import CourseMaterialsItem from "./CourseMaterialsItem";

const CourseMaterialsBlock = ({title, moduleId}) => {

  const context = useContext(Context)

  const [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    setLessonsList(store.coursesAPI.lessons[context.courseId][moduleId])
  }, [context.courseId, moduleId]);

  let list;
  if (lessonsList) {
    list = lessonsList.items.map((i) => (
      <CourseMaterialsItem key={i.id} title={i.title} materials={i.materials} />
    ));
  }

  return (
    <>
      <CourceTitle2 title={title} />
      {list}
    </>
  );
};

export default CourseMaterialsBlock;
