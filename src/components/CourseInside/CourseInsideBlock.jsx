import { useContext, useEffect, useState } from "react";
import Context from "../../context/context";
import store from "../../store/store";
import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

const CourseInsideBlock = ({title, moduleId}) => {

  const context = useContext(Context)

  const [lessonsList, setLessonsList] = useState();
  useEffect(() => {
    setLessonsList(store.coursesAPI.lessons[context.courseId][moduleId])
  }, [context.courseId, moduleId]);

  let list;
  if (lessonsList) {
    list = lessonsList.items.map((i) => (
      <ContentBoxCource
        key={i.id}
        addedClass={"course__inside-box"}
        child={<div className="course__inside-box-title">{i.title}</div>}
      />
    ));
  }
  return (
    <>
      <CourceTitle2 title={title} />
      {list}
    </>
  );
};

export default CourseInsideBlock;
