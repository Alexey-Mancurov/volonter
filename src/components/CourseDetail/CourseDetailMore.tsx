import { useContext } from "react";
import Context from "../../context/context";
import CardsWithBlueBorderLink from "../common/CardsWithBlueBorderLink";
import CourceTitle2 from "../common/CourceTitle2";

type PropsType = {
  courses: {
    items: Array<any>;
    success: boolean;
  };
};
const CourseDetailMore = ({ courses }: PropsType) => {
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
