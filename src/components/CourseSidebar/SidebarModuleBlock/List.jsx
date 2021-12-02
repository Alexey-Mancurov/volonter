import Title from "./Title";

const List = ({lessonsList, moduleIndex}) => {
  console.log('List')
  let lessonList;
  if (lessonsList.items) {
    lessonList = lessonsList.items.map((i, index) => (
      <Title
        key={i.id}
        indexLesson={index}
        title={i.title}
        check={i.check}
        indexModule={moduleIndex}
      />
    ));
    return <div className="test__sidebar-block-inner">{lessonList}</div>;
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};


export default List;
