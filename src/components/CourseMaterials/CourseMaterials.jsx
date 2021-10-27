import CourseMaterialsBlock from "./CourseMaterialsBlock";

const CourseDetailMaterials = (props) => {
  let moduleList;
  if (props.modules) {
    moduleList = props.modules.items.map((i, index) => (
      <CourseMaterialsBlock
        key={i.id}
        title={i.title}
        courseId={props.courseId}
        moduleId={i.id}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  return <div className="course__inside">{moduleList}</div>;
};

export default CourseDetailMaterials;
