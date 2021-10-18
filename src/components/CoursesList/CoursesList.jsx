import CourseItem from "../CourseItem/CourseItem";

const CoursesList = (props) => {

  let courseList;
  if (props.courses) {
    courseList = props.courses.map((i) => (
      <CourseItem
        key={i.id}
        id={i.id}
        title={i.title}
        description={i.description}
        tier={i.tier}
        isCompleted={i.isCompleted}
        isFavorite={i.isFavorite}
        author={i.author}
        getCourseId={props.getCourseId}
        favoriteToggle={props.favoriteToggle}
      />
    ));
    if (props.courses.length === 0) {
      return (
        <div className="courses__none-items">
          Курсы с заданными параметрами не найдены
        </div>
      );
    }
  }

  return <div class="courses__list">{courseList}</div>;
};

export default CoursesList;
