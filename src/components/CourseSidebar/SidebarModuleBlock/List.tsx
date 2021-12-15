import Title from "./Title";
import s from "./index.module.css";

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
    return <div className={s.inner}>{lessonList}</div>;
  } else {
    return <div>Подождите, идет загрузка</div>;
  }
};

export default List;
