import Title from "./Title";

type TProps = {
  lessonsList: {
    items: Array<{
      id: number | string;
      title: string;
      check: boolean;
    }>;
  };
  moduleIndex: number;
};
const List: React.FC<TProps> = ({ lessonsList, moduleIndex }) => {
  console.log("List");
  let lessonList;
  if (lessonsList.items) {
    lessonList = lessonsList.items.map((i, index) => (
      <Title
        key={i.id}
        indexLesson={index}
        title={i.title}
        isChecked={i.check}
        indexModule={moduleIndex}
      />
    ));
    return <div className="test__sidebar-block-inner">{lessonList}</div>;
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default List;
