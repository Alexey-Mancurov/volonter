import CourseItem from "../CourseItem/CourseItem";

const CoursesList = (props) => {
  let courseList = props.courses.map((i) => (
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
      
    />
  ));
  return <div class="courses__list">{courseList}</div>;
};

export default CoursesList;
