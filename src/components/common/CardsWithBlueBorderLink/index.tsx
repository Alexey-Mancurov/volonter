
import limitLengthTheList from "../../../utils/limitLengthTheList/limitLengthTheList";
import CardItem from "./CardItem";

type PropsType = {
  list: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  addedClass?: string;
  action: Function;
};
const CardsWithBlueBorderLink: React.FC<PropsType> = ({
  list,
  addedClass,
  action,
}) => {
  let courseList: Array<object> = [];

  if (list) {
    courseList = list.map((i) => (
      <CardItem
        key={i.id}
        title={i.title}
        description={i.description}
        text={"Подробнее"}
        id={i.id}
        action={action}
      />
    ));
  }
  limitLengthTheList(courseList, 4)

  return (
    <>
      <div className={`cource__swiper ${addedClass ? addedClass : ""}`}>
        <div className="swiper-wrapper">{courseList}</div>
      </div>
    </>
  );
};

export default CardsWithBlueBorderLink;
