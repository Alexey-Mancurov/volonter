import { useContext } from "react";
import Context from "../../../context/context";
import { TModulesItems } from "../../../types/types";
import CourseInsideBlock from "./CourseInsideBlock";
import s from "./index.module.css";

const CourseInside = () => {
  const context = useContext(Context);

  let moduleList: TModulesItems;

  if (context.modules) {
    moduleList = context.modules.items.map(
      (i: { id: number | string; title: string }) => (
        <CourseInsideBlock key={i.id} title={i.title} moduleId={i.id} />
      )
    );
  } else {
    moduleList = <div>Подождите, идет загрузка</div>;
  }

  return <div className={s.container}>{moduleList}</div>;
};

export default CourseInside;
