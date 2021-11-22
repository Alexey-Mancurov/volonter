import { useContext } from "react";
import Context from "../../context/context";
import CourseInsideBlock from "./CourseInsideBlock";

const CourseInside = () => {
  
  const context = useContext(Context);

  let moduleList;
  if (context.modules) {
    moduleList = context.modules.items.map((i) => (
      <CourseInsideBlock
        key={i.id}
        title={i.title}
        moduleId={i.id}
      />
    ));
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  return <div className="course__inside">{moduleList}</div>;
};

export default CourseInside;
