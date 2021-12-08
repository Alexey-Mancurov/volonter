import CourseItem from "../CourseItem/CourseItem";

type TProps = {
  courses: Array<any> | undefined;
  favoriteToggle: Function;
};

const List:React.FC<TProps> = ({ courses, favoriteToggle }) => {
  let courseList;
  if (courses) {
    courseList = courses.map((i) => (
      <CourseItem
        key={i.id}
        id={i.id}
        title={i.title}
        description={i.description}
        tier={i.tier}
        isFavorite={i.isFavorite}
        author={i.author}
        favoriteToggle={favoriteToggle}
      />
    ));
    if (courses.length === 0) {
      return (
        <div className="your__courses">
          <p className="your__courses-text">
            Курсы с заданными параметрами не найдены
          </p>
        </div>
      );
    }
  }

  return <div className="courses__list">{courseList}</div>;
};

export default List;
