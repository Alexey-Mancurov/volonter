import { useContext } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../hooks/useRequestData";
import store from "../../../store/store";
import { TLessonItems, TLessonList } from "../../../types/types";
import ContentBoxCource from "../../common/ContentBoxCource/ContentBoxCource";
import CourceTitle2 from "../../common/CourceTitle2/CourceTitle2";
import s from "./index.module.css";
import { FC } from "react";

interface TProps {
  title: string;
  moduleId: string | number;
};

const CourseInsideBlock: FC<TProps> = ({ title, moduleId }) => {
  const context = useContext(Context);

  const lessonsList: TLessonList = useRequestData(
    // @ts-ignore
    [store.coursesAPI.lessons[context.courseId][moduleId]],
    [context.courseId, moduleId]
  );

  const list = () => {
    // @ts-ignore
    return lessonsList?.items.map((i) => (
      <ContentBoxCource
        key={i.id}
        addedClass={s.addClassBox}
        child={<div className={s.boxTitle}>{i.title}</div>}
      />
    ));
  };

  return (
    <>
      <CourceTitle2 title={title} />
      {list()}
    </>
  );
};

export default CourseInsideBlock;
