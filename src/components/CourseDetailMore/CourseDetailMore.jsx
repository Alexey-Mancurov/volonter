import { NavLink } from "react-router-dom";

const CourseDetailMore = (props) => {
  let courseList

    if (props.courses.items) {
      courseList = props.courses.items.map((i) => (
        <CourseMoreItem
          title={i.title}
          description={i.description}
          id={i.id}
          getCourseId={props.getCourseId}
        />
      ));

    }
    if(courseList.length>4){
      courseList.length = 4
    }

  return (
    <>
      <p class="cource__title-2">Слушатели этого курса также проходят</p>
      <div class="cource__swiper">
        <div class="swiper-wrapper">{courseList}</div>
      </div>
    </>
  );
};

const CourseMoreItem = (props) => {
  return (
    <div class="swiper-slide cource__swiper-slide">
      <p class="course__title-4 cource__swiper-title">{props.title}</p>
      <p class="course__text cource__swiper-text">{props.description}</p>
      <NavLink
        to={"/courseDetail"}
        onClick={() => {
          props.getCourseId(props.id);
          window.location.reload();
        }}
        className='cource__swiper-btn'
      >
        Подробнее
      </NavLink>
    </div>
  );
};

export default CourseDetailMore;
