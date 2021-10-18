const CourseLevel = (props) => {
  const filter = () => {
    if (props.action === "base") {
      props.filterBase();
    } else if (props.action === "advanced") {
      props.filterAdvanced();
    }
  };

  return (
    <div
      className={`cource__level-item ${
        props.isActive ? "cource__level-current" : ""
      }`}
      onClick={()=>{filter(); props.isActiveLevel(props.index)}}
    >
      {props.text}
    </div>
  );
};

export default CourseLevel;
