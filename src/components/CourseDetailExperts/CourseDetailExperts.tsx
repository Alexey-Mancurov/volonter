import CourceTitle2 from "../common/CourceTitle2";
import CourseExpertItem from "./CourseExpertItem";

type PropsType = {
  experts: Array<{ description: string; img: string; name: string }>;
};

const CourseDetailExperts = ({ experts }: PropsType) => {
  let expertsList;

  if (experts) {
    expertsList = experts.map((i, index) => (
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
