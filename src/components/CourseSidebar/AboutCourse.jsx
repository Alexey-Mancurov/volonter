import { useContext } from "react";
import Context from "../../context/context";
import Preloader from "../common/Preloader";
import BaseData from "./BaseData";

const AboutCourse = () => {
  const context = useContext(Context);

  const state = {
    titlePoints: "Общее количество баллов",
    titleAsks: "Количество вопросов ",
  };

  if (context.course) {
    return (
      <>
        <BaseData
          num={context.course.course.totalPoints}
          title={state.titlePoints}
        />
        <BaseData
          numCurrent={context.course.course.checkAsks}
          numAll={context.course.course.totalAsks}
          title={state.titleAsks}
          isFractional={true}
        />
      </>
    );
  } else {
    return <Preloader />;
  }
};


export default AboutCourse;
