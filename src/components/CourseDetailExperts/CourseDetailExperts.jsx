import CourceTitle2 from "../common/CourceTitle2";
import CourseExpertItem from "./CourseExpertItem";

const CourseDetailExperts = (props) => {
  let expertsList;

  if (props.experts) {
    expertsList = props.experts.map((i, index) => (
      <CourseExpertItem
        key={index}
        img={i.img}
        name={i.name}
        description={i.description}
      />
    ));
  }
  return (
    <>
      <CourceTitle2 title={"Эксперты"} />
      <div className="cource__experts">{expertsList}</div>
    </>
  );
};

export default CourseDetailExperts;
