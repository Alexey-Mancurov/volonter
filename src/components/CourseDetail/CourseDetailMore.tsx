import { useContext } from "react";
import Context from "../../context/context";
import CardsWithBlueBorderLink from "../common/CardsWithBlueBorderLink";
import CourceTitle2 from "../common/CourceTitle2/CourceTitle2";
import { FC } from "react";

interface PropsType  {
  courses: {
    items: Array<any>;
    success: boolean;
  };
};
const CourseDetailMore:FC<PropsType> = ({ courses }) => {
  const context = useContext(Context);

  return (
    <>
      <CourceTitle2 title={"Слушатели этого курса также проходя"} />
      <CardsWithBlueBorderLink
        list={courses.items}
        action={context.getCourseId}
      />
    </>
  );
};

export default CourseDetailMore;
