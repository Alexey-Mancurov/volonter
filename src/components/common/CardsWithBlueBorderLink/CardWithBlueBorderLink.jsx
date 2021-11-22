import CardItem from "./CardItem";

const CardsWithBlueBorderLink = ({list, addedClass, action}) => {
  let courseList;

  if (list) {
    courseList = list.map((i) => (
      <CardItem
        key={i.id}
        title={i.title}
        description={i.description}
        text={'Подробнее'}
        id={i.id}
        action={action}
        isReload={true}
      />
    ));
  }
  if (courseList.length > 4) {
    courseList.length = 4;
  }

  return (
    <>
      <div className={`cource__swiper ${addedClass ? addedClass : ''}`}>
        <div className="swiper-wrapper">{courseList}</div>
      </div>
    </>
  );
};

export default CardsWithBlueBorderLink;
