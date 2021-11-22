const CourseExpertItem = (props) => {
  return (
    <div className="cource__expert-item">
      <img className="cource__expert-img" src={props.img} alt="" />
      <p className="cource__expert-name">{props.name}</p>
      <p className="cource__expert-text">{props.description}</p>
    </div>
  );
};
export default CourseExpertItem;
