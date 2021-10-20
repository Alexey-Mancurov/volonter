
import CourseInsideBlock from "./CourseInsideBlock";

const CourseInside = (props) => {

  let moduleList;
  if (props.modules) {
    moduleList = props.modules.items.map((i, index) => (
      <CourseInsideBlock
        key={i.id}
        title={i.title}
        courseId={props.courseId}
        moduleId={i.id}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }



  return (
    <>
      <div class="course__inside">
        {moduleList}
      </div>
    </>
  );
};

export default CourseInside;
