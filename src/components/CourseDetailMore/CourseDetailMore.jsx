import { NavLink } from "react-router-dom";

const CourseDetailMore = (props) => {
  let courseList;

  if (props.courses.items) {
    courseList = props.courses.items.map((i) => (
      <CourseMoreItem
        key={i.id}
        title={i.title}
        description={i.description}
        id={i.id}
        getCourseId={props.getCourseId}
      />
    ));
  }
  if (courseList.length > 4) {
    courseList.length = 4;
  }

  return (
    <>
      <p className="cource__title-2">Слушатели этого курса также проходят</p>
      <div className="cource__swiper">
        <div className="swiper-wrapper">{courseList}</div>
      </div>
    </>
  );
};

const CourseMoreItem = (props) => {
  return (
    <div className="swiper-slide cource__swiper-slide">
      <p className="course__title-4 cource__swiper-title">{props.title}</p>
      <p className="course__text cource__swiper-text">{props.description}</p>
      <NavLink
        to={"/courseDetail"}
        onClick={() => {
          props.getCourseId(props.id);
          window.location.reload();
        }}
        className="cource__swiper-btn"
      >
        Подробнее
      </NavLink>
    </div>
  );
};

export default CourseDetailMore;
