import { useContext } from "react";
import Context from "../../../context/context";
import { TContext } from "../../../types/types";
import CourseMaterialsBlock from "./CourseMaterialsBlock";
import s from "./index.module.css";

const CourseDetailMaterials = () => {
  const context: TContext = useContext(Context);
  const moduleList = () => {
    if (context.modules) {
      // @ts-ignore
      return context.modules.items.map((i) => (
        <CourseMaterialsBlock key={i.id} title={i.title} moduleId={i.id} />
      ));
    } else {
      return <div>Подождите, идет загрузка</div>;
    }
  };

  return <div className={s.container}>{moduleList()}</div>;
};

export default CourseDetailMaterials;
