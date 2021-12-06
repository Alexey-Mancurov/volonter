import { useContext } from "react";
import Context from "../../context/context";
import useRequestData from "../../customHooks/useRequestData";
import store from "../../store/store";
import { TLessonItems, TLessonList } from "../../types/types";
import ContentBoxCource from "../common/ContentBoxCource";
import CourceTitle2 from "../common/CourceTitle2";

type TProps = {
  title: string;
  moduleId: string | number;
};

const CourseInsideBlock:React.FC<TProps> = ({ title, moduleId }) => {
  const context = useContext(Context);

  const lessonsList:TLessonList = useRequestData(
    // @ts-ignore
    [store.coursesAPI.lessons[context.courseId][moduleId]],
    [context.courseId, moduleId]
  );

  let list:TLessonItems; 
  if (lessonsList) {
    // @ts-ignore
    list = lessonsList.items.map((i) => (
      <ContentBoxCource
        key={i.id}
        addedClass={"course__inside-box"}
        child={<div className="course__inside-box-title">{i.title}</div>}
      />
    ));
  }
  console.log(lessonsList)
  return (
    <>
      <CourceTitle2 title={title} />
      {list}
    </>
  );
};

export default CourseInsideBlock;
