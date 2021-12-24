import { useContext } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../hooks/useRequestData";
import store from "../../../store/store";
import { TLessonItems, TLessonList } from "../../../types/types";
import CourceTitle2 from "../../common/CourceTitle2/CourceTitle2";
import CourseMaterialsItem from "./CourseMaterialsItem";
import { FC } from "react";

interface TProps {
  title: string;
  moduleId: string | number;
};

const CourseMaterialsBlock: FC<TProps> = ({ title, moduleId }) => {
  const context = useContext(Context);

  const lessonsList: TLessonList = useRequestData(
    // @ts-ignore
    [store.coursesAPI.lessons[context.courseId][moduleId]],
    [context.courseId, moduleId]
  );

  const list = () =>
    // @ts-ignore
    lessonsList?.items.map((i) => (
      <CourseMaterialsItem key={i.id} title={i.title} materials={i.materials} />
    ));

  return (
    <>
      <CourceTitle2 title={title} />
      {list()}
    </>
  );
};

export default CourseMaterialsBlock;
