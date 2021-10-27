const CourseDetailContent = (props) => {
  return (
    <>
      <p className="cource__title-2">{props.title}</p>
      <div className="cource__content-box">
        <p>
          {props.text}
        </p>
      </div>
    </>
  );
};

export default CourseDetailContent;
