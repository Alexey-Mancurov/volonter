import { useContext } from "react";
import TestContext from "../../context/testContext";
import Preloader from "../common/Preloader";

const ProgressCourse = () => {
  const testContext = useContext(TestContext);
  const progressCourse = testContext.progressCoursePercent;

  if (Number.isInteger(progressCourse)) {
    const widthActiveLine = {
      width: `${progressCourse}%`,
    };

    return (
      <div className="test__sidebar-box">
        <div className="test__sidebar-wrapper test__sidebar-progressWrapper">
          <div className="test__sidebar-subtitle">Прогресс по курсу</div>
          <div className="test__sidebar-percent">{progressCourse}%</div>
        </div>
        <div className="test__sidebar-progress">
          <div
            className="test__sidebar-progress-activeLine"
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
