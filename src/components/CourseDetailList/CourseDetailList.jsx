const CourseDetailList = (props) => {
  let list;
  if (props.willLearnList.items) {
    list = props.willLearnList.items.map((i, index) => ( 
      <li key={index} className="course__list-item cource__info-list-item">
        {i}
      </li>
    ));
  }
  return (
    <>
      <p className="cource__title-2">{props.willLearnList.title}</p>
      <div className="cource__content-box">
        <ul className="cource__content-list">
          {list}
        </ul>
      </div>
    </>
  );
};

export default CourseDetailList;
