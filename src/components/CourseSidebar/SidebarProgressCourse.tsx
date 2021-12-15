import { useContext } from "react";
import TestContext from "../../context/testContext";
import Preloader from "../common/Preloader";
import s from "./index.module.css";

const ProgressCourse = () => {
  const testContext = useContext(TestContext);
  const progressCourse = testContext.progressCoursePercent;

  if (Number.isInteger(progressCourse)) {
    const widthActiveLine = {
      width: `${progressCourse}%`,
    };

    return (
      <div className={s.box}>
        
          <div className={s.subtitle}>Прогресс по курсу</div>
          <div className={s.percent}>{progressCourse}%</div>
        
        <div className={s.progress}>
          <div
            className={s.activeLine}
            style={widthActiveLine}
          ></div>
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default ProgressCourse;
