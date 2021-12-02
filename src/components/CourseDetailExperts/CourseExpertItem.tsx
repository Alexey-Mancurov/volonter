type PropsType = {
  img: string;
  name: string;
  description: string;
};

const CourseExpertItem = ({ img, name, description }: PropsType) => {
  return (
    <div className="cource__expert-item">
      <img className="cource__expert-img" src={img} alt="" />
      <p className="cource__expert-name">{name}</p>
      <p className="cource__expert-text">{description}</p>
    </div>
  );
};
export default CourseExpertItem;
