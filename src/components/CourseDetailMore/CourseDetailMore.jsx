import { useContext } from "react";
import Context from "../../context/context";
import CardsWithBlueBorderLink from "../common/CardsWithBlueBorderLink/CardWithBlueBorderLink";
import CourceTitle2 from "../common/CourceTitle2";

const CourseDetailMore = (props) => {
  const context = useContext(Context);

  return (
    <>
      <CourceTitle2 title={"Слушатели этого курса также проходя"} />
      <CardsWithBlueBorderLink
        list={props.courses.items}
        action={context.getCourseId}
      />
    </>
  );
};

export default CourseDetailMore;
