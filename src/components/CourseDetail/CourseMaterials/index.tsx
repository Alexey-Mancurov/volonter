import { useContext } from "react";
import Context from "../../../context/context";
import { TContext, TModulesItems } from "../../../types/types";
import CourseMaterialsBlock from "./CourseMaterialsBlock";
import s from "./index.module.css";


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

  return <div className={s.container}>{moduleList}</div>;
};

export default CourseDetailMaterials;
