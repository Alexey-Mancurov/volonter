const CourseDetailList = (props) => {
  let list;
  if (props.willLearnList.items) {
    list = props.willLearnList.items.map((i) => (
      <li class="course__list-item cource__info-list-item">
        {i}
      </li>
    ));
  }
  return (
    <>
      <p class="cource__title-2">{props.willLearnList.title}</p>
      <div class="cource__content-box">
        <ul class="cource__content-list">
          {list}
        </ul>
      </div>
    </>
  );
};

export default CourseDetailList;
