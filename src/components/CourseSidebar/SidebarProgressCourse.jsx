const ProgressCourse = (props) => {
  debugger
  if (Number.isInteger(props.progressCourse)) {
    let widthActiveLine = {
      width: `${props.progressCourse}%`,
    };
    return (
      <div className="test__sidebar-box">
        <div className="test__sidebar-wrapper test__sidebar-progressWrapper">
          <div className="test__sidebar-subtitle">Прогресс по курсу</div>
          <div className="test__sidebar-percent">{props.progressCourse}%</div>
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
    return <div>Подождите, шкала прогресса загружается</div>
  }
};

export default ProgressCourse;
