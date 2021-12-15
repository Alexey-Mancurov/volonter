import { useContext } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../customHooks/useRequestData";
import store from "../../../store/store";
import { TLessonItems, TLessonList } from "../../../types/types";
import ContentBoxCource from "../../common/ContentBoxCource/ContentBoxCource";
import CourceTitle2 from "../../common/CourceTitle2/CourceTitle2";
import s from './index.module.css'

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
        addedClass={s.addClassBox}
        child={<div className={s.boxTitle}>{i.title}</div>}
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
