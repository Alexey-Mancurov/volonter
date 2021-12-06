import { useContext } from "react";
import Context from "../../context/context";
import { TContext, TModulesItems } from "../../types/types";
import CourseMaterialsBlock from "./CourseMaterialsBlock";

const CourseDetailMaterials = () => {

  const context:TContext = useContext(Context)

  let moduleList:TModulesItems;
  if (context.modules) {
    // @ts-ignore
    moduleList = context.modules.items.map((i) => (
      <CourseMaterialsBlock
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

export default CourseDetailMaterials;
