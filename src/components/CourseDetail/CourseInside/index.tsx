import { useContext } from "react";
import Context from "../../../context/context";
import CourseInsideBlock from "./CourseInsideBlock";
import s from "./index.module.css";

const CourseInside = () => {
  const context = useContext(Context);
  const moduleList = () => {
    if (context.modules) {
      return context.modules?.items.map(
        (i: { id: number | string; title: string }) => (
          <CourseInsideBlock key={i.id} title={i.title} moduleId={i.id} />
        )
      );
    } else {
      return <div>Подождите, идет загрузка</div>;
    }
  };

  return <div className={s.container}>{moduleList()}</div>;
};

export default CourseInside;
