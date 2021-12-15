import { useContext } from "react";
import Context from "../../../context/context";
import useRequestData from "../../../customHooks/useRequestData";
import store from "../../../store/store";
import { TLessonItems, TLessonList } from "../../../types/types";
import CourceTitle2 from "../../common/CourceTitle2/CourceTitle2";
import CourseMaterialsItem from "./CourseMaterialsItem";

type TProps = {
  title: string;
  moduleId: string | number;
};

const CourseMaterialsBlock:React.FC<TProps> = ({ title, moduleId }) => {
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
