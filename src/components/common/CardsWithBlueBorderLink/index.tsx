import limitLengthTheList from "../../../utils/limitLengthTheList/limitLengthTheList";
import CardItem from "./CardItem";
import s from "./index.module.css";
import { FC } from "react";

interface PropsType  {
  list: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  addedClass?: string;
  action: Function;
};
const CardsWithBlueBorderLink: FC<PropsType> = ({
  list,
  addedClass,
  action,
}) => {

  const courseList = () => {
    return list?.map((i) => (
      <CardItem
        key={i.id}
        title={i.title}
        description={i.description}
        text={"Подробнее"}
        id={i.id}
        action={action}
      />
    ));
  };
  // @ts-ignore
  limitLengthTheList(courseList, 4);
  return (
    <>
      <div className={`${s.inner} ${addedClass ? addedClass : ""}`}>
        <div className={s.wrapper}>{courseList()}</div>
      </div>
    </>
  );
};

export default CardsWithBlueBorderLink;
